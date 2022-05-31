import Button from "./Boton";

const Item = ({ id, modelo, precio, img }) =>{
    return(
        <div className='card col col-lg-3 col-md-6 col-sm-7'>
            <img className='imagenarticulo' src={img} alt='fotos'></img>
            <div class="card-body">
                <h5 class="card-title">{modelo}</h5>
                <p class="card-text">{precio}</p>
                <Button  label='Comprar'  clickComprar={()=> console.log('comprar')}/>
            </div>
        </div>
    )
}

export default Item