import { Link } from "react-router-dom"
import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = ({id, name , category, price, stock, description, img}) =>{
    const [quantity, setQuantity] = useState(0)
    
    const handleOnAdd = (quantity) =>{
        console.log('agregue al carrito', quantity)

        setQuantity(parseInt(quantity))
        
        // serCart(prev =>[...prev, {id,name,price,quantity}])
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
                    quantity > 0 ? (
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