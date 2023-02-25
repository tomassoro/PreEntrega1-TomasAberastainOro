import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Center } from "@chakra-ui/react";
const Navbar = () => {
    const {totalQuantity} = useContext(CartContext)
    return (
        <nav className='navBar'style={{minHeight:'20%'}}>
            <Link to='../'>
                <div className="logo">
                    <img src='./Images/faro.png' width='55px' alt='Logo'/>
                    <h1 fontSize={32}>Los Narvales</h1>
                </div>
            </Link>    
            <Center className="navBarLinks">
                <Link to='../'><button className="link">Productos</button></Link>
                <Link to='../category/Imperial'><button className="link">Imperiales</button></Link>
                <Link to='../category/Yerba'><button className="link">Yerba</button></Link>
            </Center>
            <div>
                <CartWidget totalQuantity={totalQuantity} className='cartWidget'/>
            </div>
        
        </nav>

    );
};
export default Navbar;