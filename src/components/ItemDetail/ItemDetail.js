const ItemDetail = ({id, name , category, price, stock, description, img}) =>{
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt={name}/>
            <p>{price}</p>
            <p>{description}</p>
            
        </div>
    )
}
export default ItemDetail