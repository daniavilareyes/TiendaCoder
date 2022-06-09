import React from "react";
import { pedirRecursos } from "./Asyn";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { pedirRecursosByCategory } from "./Asyn";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [ productos, setProductos ] = useState([])
    const {categoryId} = useParams()

    useEffect (() => {
        if (!categoryId){
        pedirRecursos().then( carga =>{
            setProductos(carga)
        })
    } else {
        pedirRecursosByCategory(categoryId).then (carga =>{
            setProductos(carga)
        })
    }
},[categoryId])

    return (
        <div>
            <ItemList products={productos} />
        </div>
    )
}

export default ItemListContainer