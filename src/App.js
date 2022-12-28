import './App.scss';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CarWidget';
function App() {
  return (
    <div className="App" display='flex'>
      <Navbar color='#003b' padding='25px' display='flex'/>
      <CartWidget />
      <ItemListContainer greeting='Bienvenidos a mates Los Narvales'/>   
    </div>
  );
} 

export default App;