import { useContext, useState } from "react";
import CarritoContext from "./CartContext";
import { getDocs, collection, query, where, addDoc, writeBatch, documentId } from 'firebase/firestore'
import { db }  from './servicios/firebase/index'
import Button from "./Boton";


const Checkout = () => {
    
    const {carrito} = useContext(CarritoContext)

    const {precioTotal} = useContext(CarritoContext)

    const {vaciarCarrito} = useContext(CarritoContext)

    const total = precioTotal()

    const [ compraId, setCompraId ] = useState('')

    const [inputs, setInputs] = useState ({
        nombre: '',
        apellido: '',
        direccion: '',
        email: '',
    })

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs( values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        
       const datosCompra = {
            cliente:{
                nombre: (inputs.nombre),
                apellido: (inputs.apellido),
                direccion: (inputs.direccion),
                email: (inputs.email),
            },
            items: carrito,
            total: total,

        }
        
        const batch = writeBatch(db)

        const carritoId = carrito.map (art => art.id)

        const outOfStock = []

        const collectionRef = collection (db, 'articulos')

        getDocs(query(collectionRef, where(documentId(), 'in', carritoId)))
        .then (response =>{
            response.docs.forEach( doc => {
                const dataDoc = doc.data()
                const product = carrito.find( product => product.id === doc.id)
                const productCantidad = product.cantidad 

                if (dataDoc.stock >= productCantidad){
                    batch.update(doc.ref, {stock: dataDoc.stock - productCantidad})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
        }).then(()=>{
            if (outOfStock.length === 0 ){
                const collectionRef = collection (db, 'ordenes')

               return addDoc(collectionRef, datosCompra)
            } else {
                return Promise.reject ({type: 'out_of_stock', products: outOfStock })
            }
        }).then (({ id }) => {

            batch.commit()
            setCompraId(id)
            vaciarCarrito()
        }). catch(error => {
            if (error.type === ' out_of_stock'){
                <div> 
                    <h2>Lo sentimos, hay productos fuera de stock</h2>
                </div>
            } else {
                console.log (error)
            }
        })
        
    }

    return(
        <>
        { carrito.length !== 0 
        ? <div className= 'containerFormulario'>
        <form onSubmit={handleSubmit} className='form'>
      <label>Ingresa tu nombre:  </label>
      <input 
        type="text" 
        name="nombre" 
        value={inputs.nombre || ""} 
        onChange={handleChange}
        className='inputForm'
      />
    
      <label>Ingresa tu apellido: </label>
        <input 
          type="text" 
          name="apellido" 
          value={inputs.apellido || ""} 
          onChange={handleChange}
          className='inputForm'
        />
       
        <label>Ingresa tu direccion:</label>
        <input 
          type="text" 
          name="direccion" 
          value={inputs.direccion || ""} 
          onChange={handleChange}
          className='inputForm'
        />
        
        <label>Ingresa tu email: </label>
        <input 
          type="text" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
          className='inputForm'
        />
       
        <div className="botoncheckout">
        <Button  label= 'Comprar'></Button>
         </div>
        
    </form>
    </div>

    :<div className='compraexitosa'>
            <h2> Compra exitosa!</h2>
            <h3>Tu numero de pedido es # {compraId} </h3>
    </div>
}
</>

    )
}

export default Checkout 