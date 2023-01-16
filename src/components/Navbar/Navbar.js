import { Link } from "react-router-dom";

const Navbar = ({color, padding, display, justifyContent}) => {
    return (
        <nav className='navBar' style={{backgroundColor: color, padding: padding, display: display, justifyContent: justifyContent}}>
            <h1>Los Narvales</h1>
            <img src='./Images/faro.png' width='60px' alt='Logo'/>
            <div>
                <Link to='/'><button>Productos</button></Link>
                <Link to='./category/imperial'><button>Imperiales</button></Link>
                <Link to='/'><button>Yerba</button></Link>
            </div>
        </nav>

    );
};
export default Navbar;