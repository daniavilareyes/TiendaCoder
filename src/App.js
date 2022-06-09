import './App.css';
import * as bootstrap from 'bootstrap';
import Menu from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/' element={ <ItemListContainer/>}/>
        <Route path='/detail/:articuloId' element={ <ItemDetailContainer/>}/>
        <Route path='/categoria/:categoryId' element={ <ItemListContainer/> }/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
