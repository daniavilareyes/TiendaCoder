import { useState, useEffect, createContext } from "react";

const CarritoContext = createContext()

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState ([])
    const [cantidad, setCantidad] = useState ([])

    useEffect(() =>{
        let cantidad = 0 
        carrito.forEach(articulo => {
            cantidad += articulo.cantidad
        });
        setCantidad(cantidad)
    },[carrito])

    const agregarItem = ( agregarProducto ) => {
        if (!carrito.some (articulo => articulo.id === agregarProducto.id)){
            setCarrito([...carrito, agregarProducto])
        }
    }

    const eliminarItem = (id) => {
        const productosCarrito = carrito.filter ( articulo => articulo.id !== id)
        setCarrito (productosCarrito)  
    }

    const vaciarCarrito = () =>{
        const productosCarrito = []
        setCarrito( productosCarrito)
    }

    return (
        <CarritoContext.Provider value={{carrito, agregarItem, eliminarItem, vaciarCarrito, cantidad }}>
            {children}
        </CarritoContext.Provider>
    )
}

export default CarritoContext