const CartWidget = ({totalQuantity})=>{
    return(
        <div >
            <img src='./Images/anadir-a-la-cesta.png' alt='Cart' width='45px'/>{totalQuantity}
        </div>
    )
}
export default CartWidget;