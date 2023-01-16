const Item = ({name, img, price}) =>{
    return (
        <div className="Item">
            <h4>{name}</h4>
            <img src={img} alt={name} style={{width: 200}}/>
            <p> ${price}</p>
        </div>
    )
}
export default Item