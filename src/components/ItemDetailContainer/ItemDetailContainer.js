import { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'


// const Cargando = () =>{
//     if(loading){
//         setTimeout(() =>{return(
//             <h1>Cargando....</h1>
//         )},1000)
//     }
// }

const ItemDetailContainer = ({setCart}) => {
    const [product , setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams();

    useEffect(() =>{    
        getProductById(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(
                setLoading(false)
            )

    }, [productId])
    
    return (
        <div style={{display: 'flex', justifyContent:'center', marginTop: 20, fontSize: '1.5rem'}}>
            { <>
                {loading && <span >Loading...</span>}
                {loading &&  null}
            </>}
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} setCart={setCart}/>
        </div>
        </div>
    )
}
export default ItemDetailContainer  