import Cart from './Cart'
import CarritoContext from './CartContext'
import { useContext } from 'react'


const CartContainerList = ({ carrito }) =>{

    const { precioTotal } = useContext(CarritoContext)

    const total = precioTotal()

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
            {total}    
             </th>
           </tr>
        </tbody>
        </table>
      
         
        
    )
}

export default CartContainerList