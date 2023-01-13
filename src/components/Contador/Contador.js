import {useState} from 'react'
const Contador = () => {
    // let count = 0; 
    const [count, setCount] = useState(10) 
    //desestructuramos y asignamos nombres a los array. El primer elemento sera nuestro valor y por comvencion el segundo elemento, que es la funcion que setea al primer elemento, comenzara por set...
    // console.log(useState(['holi']))
    const increment = () => {
        for(let i = 0; i < 5; i++){
        // setCount(count +1) EN ESTE CASO, el set count no aplica debido a que la funcion no termino, por ende, samara de a uno. La solucion a este problema es usando una funcion con los parametros siguientes: 
        setCount(prev => {     
            console.log(count)
            console.log(prev) //MAS VISUAL
            return prev +1    
        })
        //no se usa el -- ni el ++ debido a que cambia el valor de nuestro primer elemento y lo que nosotros queremos lograr es setearlo
        } 
        // count++
        // console.log(count)
    }
    const decrement = () => {
        setCount(prev => prev -1)
        
        // count--
        // console.log(count)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div>
            <h1>{count}</h1>
            
        {/* //Por que en este caso no se aplicaria el cambio en count ? Debido a que no se esta haciendo un render completo del componente Contador, solo lo hace con las funciones de increment y decrement. Dado a que lo que buscamos es un cambio en la interfaz de nuestra singlepage, habria que tener en cuenta q React no sabe que tiene que ejecutar todo el componente Contador y que, por ejemplo, el return es una funcion, la misma se deberia ejecutar para poder visualizarce. s
        Aqui es donde se hace presente lo que conocemos como STATE O ESTADO, que nos permitira guardar un dato y al cambiarlo, react entendera que debe hacer un render del componente donde se encuentra el mismo. Para esto entran en juego los "Hooks", que son funciones dadas por la libreria de React, que van a solventar alguna necesidad especifica. Una particularidad de los estados es que no se actualizan hasta que la funcion no termine  */}
            <button onClick={increment}>+5</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}
export default Contador