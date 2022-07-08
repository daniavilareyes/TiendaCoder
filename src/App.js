import './App.css';
import * as bootstrap from 'bootstrap';
import Menu from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './componentes/CartContext';
import CartContenedor from './componentes/CartContainer'
import Checkout from './componentes/Checkout'


function App() {
  return (
    <div className="App">
    <CartProvider>
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/' element={ <ItemListContainer/>}/>
        <Route path='/detail/:articuloId' element={ <ItemDetailContainer/>}/>
        <Route path='/categoria/:categoryId' element={ <ItemListContainer/> }/>
        <Route path='/carrito' element= { <CartContenedor/> } />
        <Route path='/checkout' element= { <Checkout/> } />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
  );
}


export default App;
