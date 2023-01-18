import { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'



const ItemDetailContainer = () => {
    const [product , setProduct] = useState({})

    const {productId} = useParams();

    useEffect(() =>{
        getProductById(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })

    }, [productId])

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20, fontSize: '1.5rem'}}>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}
export default ItemDetailContainer