import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import Checkout from "../Checkout/Checkout"
import { Center, Heading, Button } from "@chakra-ui/react"

const CartContainer = () =>{ 
    const {cart} = useContext(CartContext)
    console.log(cart)
    return(
        <div>
            <Center mt='20px'>
                <Heading>
                    Cart
                </Heading>
            </Center>
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
        </div>
    )
}
export default CartContainer