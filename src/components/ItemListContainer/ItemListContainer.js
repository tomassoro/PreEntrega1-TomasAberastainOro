import { useEffect, useState } from "react";
import { getProducts , getProductsByCategory} from '../../asyncMock'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();
    const [loading, setLoading] = useState(true);
    
    
    useEffect(() => { 
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;
        //traigo productos si es que en nuestra ruta se encuentra categoyId
        asyncFunction(categoryId) //llamamos a la funcion y usamos como dato el categoryId que es dado por nuestro useParams
        .then(products => { //entonces, traeme los productos
            setTimeout(() => { //aplico un retardo de la llegada y seteo los productos 
                setLoading(false);
                setProducts(products);
            }, 1000)
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(()=>{
            setLoading(true)   
        })
    }, [categoryId]);
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