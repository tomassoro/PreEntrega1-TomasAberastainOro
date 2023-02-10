
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'
import {useAsync} from '../../hooks/UseAsync'
import { getProducts } from "../../services/firebase/firestore/products";

const ItemListContainer = () => {   
    const {categoryId} = useParams();
    const getProductsWithCategory = () => getProducts(categoryId)
    const {data: products, error,loading} = useAsync(getProductsWithCategory , [categoryId])
    if(loading){
        <div>
            <Spinner size='xl' className="spinner"/>
        </div>
    }
    if(error) {
        return <h1>Hubo un error al cargas los productos</h1>
    }
    return (
        <div  className="ItemListContainer">
            <h1>Listado de productos</h1>   
            <div>
                <ItemList products={products}/>
            </div>
        </div>
    )
}


export default ItemListContainer;