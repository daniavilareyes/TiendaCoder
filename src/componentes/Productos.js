import React from 'react';
import Button from "./Boton";

function Articulo ({imagen, precio, descripcion}) {
    return (<div className='card col col-lg-3 col-md-6 col-sm-7'>
            <img className='imagenarticulo' src={require(`../imagenes/${imagen}.jpg` )} alt='fotos'></img>
            <div class="card-body">
                <h5 class="card-title">{descripcion}</h5>
                <p class="card-text">{precio}</p>
                <Button  label='Comprar'  clickComprar={()=> console.log('comprar')}/>
            </div>
        </div>
    );
}

export default Articulo;