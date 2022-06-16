import { useContext } from "react"
import CarritoContext from "./CartContext"
import Button from "./Boton"
import CartContainerList from "./CartContainerList"


const CartContenedor = ()=>{
    const {carrito} = useContext(CarritoContext)

    return (
        <>
           <CartContainerList carrito={carrito}/>
            <Button label='Finalizar Compra' />
        </>
    )
}

export default CartContenedor