import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem, isInCart } = useContext(CartContext)
    console.log(quantity)
    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ', quantity)

        setQuantity(parseInt(quantity))   
        
        addItem({ id, name, price, quantity})
    }

    return (
        <div className="ItemDetail">
            <header>
                <h1>{name}</h1>
            </header>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section>
                <p>$ {price}</p>  
                <p>Categoria: {category}</p>
                <p>Descripción: {description}</p>
            </section>
            <footer>
                {
                    isInCart(id) ?(
                        <Link to='/cart'>Terminar compra</Link>    
                    ) : (
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </div>
    )
}
export default ItemDetail