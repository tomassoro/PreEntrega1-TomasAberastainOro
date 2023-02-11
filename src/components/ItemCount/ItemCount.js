import {useState} from 'react'
import { Button } from '@chakra-ui/react'
const ItemCount = ({initial = 1 , stock, onConfirm}) => {
    const [quantity, setQuantity] = useState(initial) 
    const increment = () => {
        if(quantity < stock){
            setQuantity(prev => {     
                return prev +1    
            })
            }
    }

    
    const decrement = () => {
        if(quantity > 1){
        setQuantity(prev => prev -1)    
        }
    }

    const reset = () => {
        setQuantity(initial)
    }
    return (
        <div>
            <h1>{quantity}</h1>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
            <Button onClick={reset}>Reset</Button>
            
            <Button onClick={() =>{onConfirm(quantity)}}>Agregar al Carrito</Button>

        </div>
    )
}
export default ItemCount