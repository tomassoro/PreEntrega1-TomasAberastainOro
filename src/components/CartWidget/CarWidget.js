const CartWidget = ({totalQuantity})=>{
    return(
        <div className="cartWidget">
            <img src='./Images/anadir-a-la-cesta.png' alt='Cart' width='35px'/>{totalQuantity}
        </div>
    )
}
export default CartWidget;