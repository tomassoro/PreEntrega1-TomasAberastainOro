import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { Center, Heading, Button, Text} from "@chakra-ui/react"

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
                        <Center key={prod.id}>
                            <div >
                                <Text>{prod.name}</Text>
                            </div>
                            <Center>
                                <Link to='/checkout'><Button>Checkout</Button></Link>
                            </Center>
                        </Center>
                )
            })}
            </div>
        </div>
    )
}
export default CartContainer
