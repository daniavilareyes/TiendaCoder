import Cart from './Cart'
import CarritoContext from './CartContext'
import { useContext } from 'react'

const CartContainerList = ({ carrito }) =>{


    return(
        <table class="table">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Modelo</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
        {carrito.map (art => <Cart key={art.id}{...art} /> )}
           <tr>
            <th></th>
            <th></th>
            <th>Total</th>
            <th>
            {carrito.reduce((total, art) => total + art.precio * art.cantidad, 0 )}    
             </th>
           </tr>
        </tbody>
        </table>
      
         
        
    )
}

export default CartContainerList