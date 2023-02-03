import AppRouter from './components/AppRouter/AppRouter';
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

// const Notification = ({message}) =>{
//   const Style =  () => toast("Wow so easy!");

//       return(
//         <div style={Style}>
//           {message}
//         </div>
//       )
// }

function App() {
  const notify = () => toast.success(' Agregado al carrito!', {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  return (
    <div>
      <BrowserRouter>
        <Navbar padding='25px' display='flex'/> 
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
        <AppRouter/>
      </BrowserRouter>
    </div>
  )
}
export default App; 