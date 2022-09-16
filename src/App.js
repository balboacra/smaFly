import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyProductContainer from './components/MyProductContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <CartProvider>
          <Route path='/' element={<MyProductContainer />} />
          <Route path='/itemDetail/:id' element={<ItemDetailContainer />} />
          <Route path='/category/' element={<ItemListContainer />} />
        </CartProvider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;