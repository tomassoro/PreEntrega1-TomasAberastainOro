import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import {collection, query, where, documentId, getDocs, writeBatch, addDoc} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { Center, Heading, 
    Input,
    Card,
    Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

    
    const Checkout = () => {
        const [loading, setLoading] = useState(false)
        const [orderId, setOrderId] = useState('')
        const { cart, total, clearCart } = useContext(CartContext)
        const navigate = useNavigate()
        const [ info, setInfo] = useState()
        
        // const [mensaje, setMensaje] = useState('')
        useEffect(()=>{
            document.title ='Checkout'
        }, [])
        const handleChange = (event) => {
            const { name, value } = event.target;
            setInfo({ ...info, [name]: value });
        }
        const createOrder = async (event) => {
            event.preventDefault();
            setLoading(true)
            try {
                const objOrder = {
                    buyer: info,
                    items: cart,
                    total
                }
        
                const batch = writeBatch(db)
        
                const ids = cart.map(prod => prod.id)
                console.log(ids)
        
                const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
        
                // getDocs(productsRef).then(productsAddedToCartFromFirestore => {
        
                // })
        
                const productsAddedToCartFromFirestore = await getDocs(productsRef)
                const { docs } = productsAddedToCartFromFirestore
        
                const outOfStock = []
        
                docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const stockDb = dataDoc.stock
        
                    const productAddedToCart = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = productAddedToCart.quantity
        
                    if(stockDb >= prodQuantity) {
                        batch.update(doc.ref, { stock: stockDb - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
        
                if(outOfStock.length === 0) {
                    await batch.commit()
        
                    const orderRef = collection(db, 'orders')
        
                    const orderAdded = await addDoc(orderRef, objOrder)
        
                    const { id } = orderAdded
                    setOrderId(id)
    
                    clearCart()
    
                    setTimeout(() => {
                        navigate('/')
                    }, 5000)
    
                    console.log(id)
                } else {
                    <Center>
                        Hay productos fuera de stock
                    </Center>
                }
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
    
            
        }
    
        if(loading) {
            return (
            <Center>
                <Heading>
                Generando orden...
                </Heading>
            </Center>
            )
        }
    
        if(orderId) {
            return (
                <Center>
                    <Heading>
                        <h1>El Id de su compra es: {orderId}</h1>
                    </Heading>
                </Center>
            )
        }
    
        
    
    return(
        <div style={{minHeight:'75vh'}}>
            <Center padding='35px'>
                <Heading>
                Checkout
                </Heading>    
            </Center>   
            <Center>
                <Card padding='55px' backgroundColor='#0001'>
                    <form onSubmit={createOrder}>
                        <Input  
                            type="text" 
                            name='name' 
                            placeholder='Ingrese su nombre'
                            onChange={handleChange}
                        />
                        
                        <Input 
                            type="email" 
                            name='email' 
                            placeholder='Ingrese su Email'
                            onChange={handleChange}
                        />
                            
                        <Input 
                            type="phone" 
                            name='phone' 
                            placeholder='Ingrese su Telefono'
                            onChange={handleChange}
                        />
            
                        <Button 
                            type='submit' 
                        >Submit</Button>
            
                    </form>
                </Card>  
                </Center>   
                {/* <Center>
                    <Button mt='10px' onClick={createOrder}>Generar orden</Button> 
                </Center> */}
        </div>
    )
}
export default Checkout