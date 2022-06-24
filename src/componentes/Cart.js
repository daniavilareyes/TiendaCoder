import CartContainerList from "./CartContainerList"
import { useContext } from "react"
import CarritoContext from "./CartContext"

const Cart = ({ modelo, precio, img, cantidad }) =>{

  const { eliminarItem } = useContext(CarritoContext)

    return(
        <tr>
        <th className="imagentablacart"><img src={img}/></th>
        <td>{modelo}</td>
        <td>{cantidad}</td>
        <td>{precio}</td>
        <td><button class="btn btn-danger" onClick= {eliminarItem}> Eliminar </button></td>
      </tr>
    )
}

export default Cart