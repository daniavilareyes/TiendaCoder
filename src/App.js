import './App.css';
import * as bootstrap from 'bootstrap';
import Menu from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div className="App">
     <Menu  />
     <ItemListContainer/>
    </div>
  );
}


export default App;
