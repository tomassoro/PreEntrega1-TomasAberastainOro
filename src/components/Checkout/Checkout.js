import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import {collection, query, where, documentId, getDocs, writeBatch, addDoc} from 'firebase/firestore'
import { db } from '../services/firebase/firebaseConfig'
import { Button, Center, Heading } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name: 'Tomas Oro',
                    phone: '123456789',
                    email: 'tarta@tartutu.ioioio'
                },
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
                    hay productos fuera de stock
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

    if(cart.length === 0) {
        return (
            <Center>
                <Heading>
                    No hay productos en el carrito 
                </Heading>
            </Center>
        )
    }

    
    return(
        <div>
            <Center padding='35px'>
                <Heading>
                Checkout
                </Heading>    
            </Center>   
            <Center>
                <Button onClick={createOrder}>Generar orden</Button>
            </Center>
        </div>
    )
}
export default Checkout

