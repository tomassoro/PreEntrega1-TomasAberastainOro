import {useState} from 'react'
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
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            
            <button onClick={() =>{onConfirm(quantity)}}>Agregar al Carrito</button>

        </div>
    )
}
export default ItemCount