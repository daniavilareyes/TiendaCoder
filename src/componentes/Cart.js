import CartContainerList from "./CartContainerList"


const Cart = ({ id, modelo, precio, img, cantidad }) =>{
    return(
        <tr>
        <th scope="row">{id}</th>
        <td>{img}</td>
        <td>{modelo}</td>
        <td>{precio}</td>
        <td>{cantidad}</td>
      </tr>
    )
}

export default Cart