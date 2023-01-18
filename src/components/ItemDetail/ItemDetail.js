import Count from "../Count/Count"
const ItemDetail = ({id, name , category, price, stock, description, img}) =>{
    return (
        <div className="ItemDetail">
            <h1>{name}</h1>
            <img src={img} alt={name}/>
            <p>$ {price}</p>  
            <p>{description}</p>
            <Count stock={stock}/>
        </div>
    )
}
export default ItemDetail