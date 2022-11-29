import logo from './logo.svg';
import './App.css';
// import Header from './component/Header/Header.js';
import Shop from './component/shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Orders from './component/orders/Orders';
import Home from './component/Home/Home';



function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>

        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Shop></Shop>}></Route>

      </Routes>










    </div>
  );
}

export default App;
