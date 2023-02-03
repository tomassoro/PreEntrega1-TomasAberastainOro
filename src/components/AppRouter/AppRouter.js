import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { Routes, Route} from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const AppRouter = () =>{
    return(
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>  
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
    )
}
export default AppRouter