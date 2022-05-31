 const articulo = [
{id:1,modelo:"Entero",color:"Blanco",precio:4000,cantidad:1,img:"../imagenes/tdb.jpg"},
{id:2,modelo:"Donatella",color:"Negro",precio:5500,cantidad:1,img:"../imagenes/tdb2.jpg"},
{id:3,modelo:"Rainier",color:"Rojo",precio:5500,cantidad:1,img:"../imagenes/tdb3.jpg"},
{id:4,modelo:"Tiana",color:"Rosado",precio:4000,cantidad:1,img:"../imagenes/tdb4.jpg"},
{id:5,modelo:"Surfer",color:"Negro",precio:6500,cantidad:1,img:"../imagenes/tdb5.jpg"},
{id:6,modelo:"Classic",color:"Bordo",precio:4500,cantidad:1,img:"../imagenes/tdb6.jpg"},
{id:7,modelo:"Basic",color:"Celeste",precio:4000,cantidad:1,img:"../imagenes/tdb7.jpg"},
{id:8,modelo:"Anastasia",color:"Rosado",precio:6500,cantidad:1,img:"../imagenes/tdb8.jpg"}]

export const pedirRecursos = () => {
    return new Promise ((resolve, reject ) =>{
        setTimeout(() => {
            resolve(articulo)
        }, 1500)
    })
}