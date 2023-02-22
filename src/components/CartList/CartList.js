import ItemCart from "../ItemCart/ItemCart"
const CartList = ({cart}) =>{
    return(
        <div>
            {
                cart.map(prod=>    //cada uno de los productos que reciba, los voy a transformar en un ItemCart
                    <ItemCart key={prod.id} {...prod}/>)
            }
        </div>
    )
}
export default CartList  