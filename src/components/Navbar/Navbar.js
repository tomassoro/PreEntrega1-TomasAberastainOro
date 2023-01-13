
const Navbar = ({color, padding, display, justifyContent}) => {
    return (
        <nav className='navBar' style={{backgroundColor: color, padding: padding, display: display, justifyContent: justifyContent}}>
            <h1>Los Narvales</h1>
            <img src='./Images/faro.png' width='60px' alt='Logo'/>
            <div>
                <button onClick={()=>{console.log('Hola')}}>Productos</button>
                <button onClick={()=>{console.log('Hola')}}>Imperiales</button>
                <button onClick={()=>{console.log('Hola')}}>Yerba</button>
            </div>
        </nav>
        
    );
};
export default Navbar;