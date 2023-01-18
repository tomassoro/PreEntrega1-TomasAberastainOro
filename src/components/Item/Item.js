import { Link } from "react-router-dom"

const Item = ({id, name, img, price}) =>{

    return (
        <div className="Item" >
            <h4>{name}</h4>
            <img src={img} alt={name} style={{width: 200}}/>
            <p> ${price}</p>
            <Link to={`/item/${id}`}>Ver Detalle</Link>
        </div>
    )
}
export default Item