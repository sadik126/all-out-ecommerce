import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import { getAuth } from 'firebase/auth';
// import Header from './component/Header/Header.js';
import Shop from './component/shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Orders from './component/orders/Orders';
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Error from './component/Error/Error';
import Cart from './component/Cart/Cart';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import Requireauth from './component/RequireAuth/Requireauth';


const auth = getAuth(app);
function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/orders' element={
          <Requireauth>

            <Orders></Orders>

          </Requireauth>

        }></Route>

        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Shop></Shop>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='*' element={<Error></Error>}></Route>

      </Routes>
      <Footer></Footer>










    </div>
  );
}

export default App;
