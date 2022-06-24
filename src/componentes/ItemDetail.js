import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Boton";
import './Contador'
import Contador from "./Contador";
import CarritoContext from "./CartContext";

const ItemDetail = ({ id, modelo, img, precio, stock }) =>{
    const {agregarItem} = useContext(CarritoContext)

    const [cantidadAgregar, setCantidadAgregar] = useState (0)

    const handleOnAdd = (cantidad) => {
        console.log(`se agregaron ${cantidad} ${modelo}`)

        agregarItem({id, modelo, cantidad, precio, img })

        setCantidadAgregar(cantidad)
    }

    return (
        <>
        <div className='carddetail d-flex  col col-lg-7 col-md-6 col-sm-7'>
            <div className="contenedorimagen">
                <img className='imagenarticulo' src={img} alt='fotos'></img>
            </div>
            <div className="card-body-detail">
                <h2 className='card-title'>{modelo}</h2>
                <h4 className="card-text"> {precio}</h4>
                <select>
                    <option value='talla s'>Talla s </option>
                    <option value='Talla m'>Talla m </option>
                    <option value='Talla l'>Talla l </option>
                </select>
                {cantidadAgregar === 0 
                ? <Contador stock={stock} onAdd={handleOnAdd} />
                : <Link to='/carrito'> Ir a comprar </Link> }
                <Button className='botoncomprar botondetail' label='Comprar'  clickcomprar={()=> console.log('comprar')}/> 
            </div>
        </div>
        </>
    )
}

export default ItemDetail