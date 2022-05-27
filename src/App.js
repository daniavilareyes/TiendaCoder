import './App.css';
import * as bootstrap from 'bootstrap';
import Menu from './componentes/Navbar'
import Articulo from './componentes/Productos'

function App() {
  return (
    <div className="App">
     <Menu  />
      <div className='container container-fluid'>
        <div className='row'>
        <Articulo imagen= "tdb" precio="1500" descripcion="traje de baño" />
        <Articulo imagen= "tdb2" precio="1500" descripcion="traje de baño" />
        <Articulo imagen= "tdb3" precio="1500" descripcion="traje de baño" />
        <Articulo imagen= "tdb4" precio="1500" descripcion="traje de baño" />
        <Articulo imagen= "tdb5" precio="1500" descripcion="traje de baño" />
        <Articulo imagen= "tdb6" precio="1500" descripcion="traje de baño" />
        <Articulo imagen= "tdb7" precio="1500" descripcion="traje de baño" />
        <Articulo imagen= "tdb8" precio="1500" descripcion="traje de baño" />
        </div>
      </div>
    </div>
  );
}


export default App;
