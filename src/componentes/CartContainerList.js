import Cart from './Cart'

const CartContainerList = ({ carrito }) =>{

    return(
        <table class="table">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Img</th>
            <th scope="col">Modelo</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            </tr>
        </thead>
        <tbody>
        {carrito.map (art => <Cart key={art.id}{...art} /> )}
        </tbody>
        </table>
      
         
        
    )
}

export default CartContainerList