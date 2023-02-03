import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CarWidget";
const Navbar = ({color, padding, display, justifyContent}) => {
    return (
        <nav className='navBar' style={{backgroundColor: color, padding: padding, display: display, justifyContent: justifyContent}}>
            <h1>Los Narvales</h1>
            <img src='./Images/faro.png' width='60px' alt='Logo'/>
            <div>
                <Link to='../'><button>Productos</button></Link>
                <Link to='../category/imperial'><button>Imperiales</button></Link>
                <Link to='../category/yerba'><button>Yerba</button></Link>
            </div>
            <CartWidget/>
        </nav>

    );
};
export default Navbar;