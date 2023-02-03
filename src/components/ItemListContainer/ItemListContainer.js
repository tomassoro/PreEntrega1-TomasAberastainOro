import { useEffect, useState } from "react";
import { getProducts , getProductsByCategory} from '../../asyncMock'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

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
            }, 500)
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(()=>{
            setLoading(true)   
        })
    }, [categoryId]);
    return (
        <div className="ItemListContainer">
            { loading ? <h3>Loading...</h3> : <h3>Loaded!</h3>}
            
            <h1>Listado de productos</h1>   
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;