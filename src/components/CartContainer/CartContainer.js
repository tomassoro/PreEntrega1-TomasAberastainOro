import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartContainer = () =>{ 
    const {cart} = useContext(CartContext)
    return(
        <div>
            <h1>Cart</h1>
            <div>

            {cart.map(prod =>{
                return(
                    <h2>{prod.name}</h2>
                )
            })}
            </div>
            <Link to='/checkout'></Link>
        </div>
    )
}
export default CartContainer