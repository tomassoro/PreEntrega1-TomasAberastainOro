import {useState} from 'react'
const ItemCount = ({initial = 1 , stock}) => {
    const [count, setCount] = useState(initial) 
    const increment = () => {
        if(count < stock){
            setCount(prev => {     
                return prev +1    
            })
            }
    }

    
    const decrement = () => {
        if(count > 1){
        setCount(prev => prev -1)    
        }
    }

    const reset = () => {
        setCount(initial)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Agregar al Carrito</button>

        </div>
    )
}
export default ItemCount