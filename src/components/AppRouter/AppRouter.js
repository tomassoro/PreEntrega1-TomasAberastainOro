import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { Routes, Route} from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Checkout from '../Checkout/Checkout'
import CartContainer from '../CartContainer/CartContainer';

const AppRouter = ({setCart}) =>{
    return(
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>  
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:productId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<CartContainer />}/>
            <Route path='/checkout' element={<Checkout />}/>
        </Routes>
    )
}
export default AppRouter