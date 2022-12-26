
const Navbar = ({color, padding, display, justifyContent}) => {
    return (
        <nav className='navBar' style={{backgroundColor: color, padding: padding, display: display, justifyContent: justifyContent}}>
            <h1>Los Narvales</h1>
            <img src='./Images/faro.png' width='60px' alt='Logo'/>
            <div>
                <button>Productos</button>
                <button>Imperiales</button>
                <button>Yerba</button>
            </div>
        </nav>
    );
};
export default Navbar;