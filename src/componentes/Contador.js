import React from "react";
import { useState } from 'react';

const Contador =({ stock=0 , inicial= 1, onAdd })=> {
    const [cantidad, setCantidad] = useState(inicial)

    const decrement = () => {
       if( cantidad > 1 ){
        setCantidad(cantidad -1)
       } 
    }

    const increment = () => {
      if( cantidad < stock){
        setCantidad(cantidad + 1)
      }
    }
  

  return (
<div className='Counter'>          
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <h3 className='Number'>{cantidad}</h3>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
            </div>
       </div>
  )

}


export default Contador
