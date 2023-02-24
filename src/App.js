import AppRouter from './components/AppRouter/AppRouter';
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { NotificationProvider } from './notification/NotificationService';
import { CartProvider } from './context/CartContext';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer/Footer';

// import { createContext } from 'react';
// import { useState } from 'react';

function App() {

  return (
    <div>      
      <ChakraProvider>
        <NotificationProvider>  
          <CartProvider>  
            <BrowserRouter>
              <Navbar padding='25px' display='flex'/> 
              <AppRouter/>
            </BrowserRouter>
          </CartProvider>
        </NotificationProvider>
        <Footer/>
      </ChakraProvider>

    
    </div>
  )
}

export default App; 