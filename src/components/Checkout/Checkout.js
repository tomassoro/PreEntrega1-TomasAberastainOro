import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Checkout = () =>{
    const {cart, total} = useContext(CartContext)
    const objOrder = { //esto hay que reemplazarlo por un form
        buyer: {
            name : 'Tomas Oro',
            phone: '123123132',
            email: 'tarta@tartuutu.ioio'
        },
        items: cart,
        total
    }
    return(
        <div>
            Checkout
        </div>
    )
}
export default Checkout