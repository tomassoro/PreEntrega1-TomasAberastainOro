import AppRouter from './components/AppRouter/AppRouter';
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import { CartProvider } from './context/CartContext';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <div>      
      <ChakraProvider>
        <CartProvider>  
          <BrowserRouter>
            <Navbar padding='25px' display='flex'/> 
            <AppRouter/>
          </BrowserRouter>
        </CartProvider>
      </ChakraProvider>

    
    </div>
  )
}

export default App; 