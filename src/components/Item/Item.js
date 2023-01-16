
import { useNavigate } from "react-router-dom"
const Item = ({id, name, img, price}) =>{
    const navigate = useNavigate()
    return (
        <div className="Item" onClick={()=>{navigate(`../item/${id}`)}}>
            <h4>{name}</h4>
            <img src={img} alt={name} style={{width: 200}}/>
            <p> ${price}</p>
            {/* <Link to={}>Ver Detalle</Link> */}
        </div>
    )
}
export default Item