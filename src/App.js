import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar padding='25px' display='flex'/> 
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>  
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
  //   const [products, setProducts] = useState([]);
//   const [input, setInput] = useState('');
//   console.log(input)
//   console.log(products)
  

//   useEffect(() =>{
//     fetch(`https://api.mercadolibre.com/sites/MLA/search?q=Mate+imperial+artesanal`)
//     .then(response =>{
//       return response.json()
//     })
//     .then(res => {
//       setProducts(res.results)
//     })
//   }, []) 
//   const handleOnSubmit = (e) => {
//     e.preventDefault()
//         fetch(`https://api.mercadolibre.com/sites/MLA/search?q=Mate+imperial+artesanal+${input}`)
//       .then(response =>{
//         return response.json()
//       })
//       .then(res => {
//         setProducts(res.results)
//       })
//     } 
  


//   return (
//     <div className="App" display='flex'>
//       <Navbar padding='25px' display='flex'/>
//       <CartWidget />
//       <ItemListContainer greeting='Bienvenidos a mates Los Narvales'/>   
//       <Contador />
      
//       <form onSubmit={handleOnSubmit}>
//         <input value={input} onChange={(e) => setInput(e.target.value)}/>
//         <button type='submit'>Buscar</button>
//       </form>

//       <div>
//         {products.map(prod =>{
//           return (
//             <div key={prod.id}>
//               <h2>{prod.title}</h2>
//               <img src={prod.thumbnail} alt={prod.title}/>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   );
// } 
}
export default App; 