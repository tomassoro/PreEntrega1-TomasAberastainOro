import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { Center, Heading,Button} from "@chakra-ui/react"
import CartList from "../CartList/CartList"

const CartContainer = () =>{ 
    const {cart} = useContext(CartContext)
    console.log(cart)
    return(
        <div>
            <Center mt='20px'>
                <Heading>
                    Tu carrito.. 
                </Heading>
            </Center>
            <CartList cart={cart}/>
            <Center>
                <Link to='/checkout'><Button>Checkout</Button></Link>
            </Center>
            {/* <div>
            {cart.map(prod =>{
                return(
                        <Center key={prod.id}>
                            <div >
                                <Text>{prod.name}</Text>
                            </div>
                        </Center>
                )
            })}
            </div> */}
        </div>
    )
}
export default CartContainer
