import React from "react";
import { pedirRecursos } from "./Asyn";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    const [ productos, setProductos ] = useState([])

    useEffect (() => {
        pedirRecursos().then( carga =>{
            setProductos(carga)
        })
    })

    return (
        <div>
            <ItemList products={productos} />
        </div>
    )
}

export default ItemListContainer