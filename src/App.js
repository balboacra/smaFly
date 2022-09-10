import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyProductContainer from './components/MyProductContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MyProductContainer/>}/>
        <Route path='/itemDetail' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>

    // <div className="container">
    //   <NavBar />
    //   <MyProductContainer/>
    //   <ItemDetailContainer />
    // </div>
  );
}

export default App;