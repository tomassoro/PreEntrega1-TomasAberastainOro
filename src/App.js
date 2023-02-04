import AppRouter from './components/AppRouter/AppRouter';
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react';
import { createContext } from 'react';
import { CartProvider } from './context/CartContext';



function App() {
  return (
    <div>      
      <CartProvider>  
        <BrowserRouter>
          <Navbar padding='25px' display='flex'/> 
          <AppRouter/>
        </BrowserRouter>
      </CartProvider>

    
    </div>
  )
}

export default App; 