import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import Checkout from "../Checkout/Checkout"
import { Center, Heading, Button } from "@chakra-ui/react"

const CartContainer = () =>{ 
    const {cart} = useContext(CartContext)
    return(
        <div>
            <h1>Cart</h1>
            <div>

            {cart.map(prod =>{
                return(
                    <div>
                        <Center>
                            <div key={prod.id}>
                                <h2>{prod.name}</h2>
                            </div>
                        </Center>
                        <Center>
                            <Link to='/checkout'><Button>Checkout</Button></Link>
                        </Center>
                    </div>
                )
            })}
            </div>
            <Link to='/checkout'></Link>
        </div>
    )
}
export default CartContainer