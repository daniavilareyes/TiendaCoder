import { useEffect, useState } from "react"
import { pedirRecursosById } from './Asyn'
import ItemDetail  from './ItemDetail'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{
   
    const [product, setProduct] = useState()

    const { articuloId } = useParams()

   useEffect(() => {
       pedirRecursosById(articuloId).then(response => {
            setProduct(response)
       })
   }, [])
   
    return (
        <>
            <h1 className="detalledelproducto">Detalle del Producto</h1>
            <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer