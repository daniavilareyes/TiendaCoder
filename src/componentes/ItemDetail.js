import Button from "./Boton";

const ItemDetail = ({ id, modelo, img, precio }) =>{
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
                <Button className='botoncomprar botondetail' label='Comprar'  clickcomprar={()=> console.log('comprar')}/> 
            </div>
        </div>
        </>
    )
}

export default ItemDetail