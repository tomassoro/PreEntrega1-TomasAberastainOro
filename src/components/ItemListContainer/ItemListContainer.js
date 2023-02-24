import { useEffect, useState } from "react";
// import { getProducts , getProductsByCategory} from '../../asyncMock'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'
import { collection, getDocs, query,where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = () => {   
    const [products, setProducts] = useState([]);   
    const {categoryId} = useParams();
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        document.title ='Productos'
    }, [])
    
    useEffect(() => { 
        setLoading(true)
        const collectionRef = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId)) 
        :collection(db, 'products')
        
        getDocs(collectionRef).then(response =>{
            console.log(response)
           
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                // console.log(data)
                // console.log(doc.id)
                return{id: doc.id, ...data}
            })
            setProducts(productsAdapted)
            console.log(productsAdapted)
        }).catch(error =>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [categoryId])
    return (
        <div  className="ItemListContainer">
            <h1>Listado de productos</h1>   
            { <>
                {loading && <Spinner size='xl' className="spinner"/>}
                {!loading && null}
            </>}
            <div>
                <ItemList products={products}/>
            </div>
        </div>
    )
}

export default ItemListContainer;