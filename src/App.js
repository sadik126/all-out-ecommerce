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
import { useState, CSSProperties } from 'react';
import { useEffect } from 'react';
import { ClipLoader, BarLoader } from 'react-spinners';
import Details from './component/Details/Details';
import Themeprovider from './component/Themetoggle/Themeprovider';
import { useContext } from 'react';
import { themeContext } from './Context';
import { useAuthState } from 'react-firebase-hooks/auth';


const auth = getAuth(app);


function App() {

  const [user] = useAuthState(auth);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;




  const override = {
    display: "flex",

    margin: "150px auto",
    borderColor: "red",
  };

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // setLoading(true)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 3000)
  }, [])
  return (
    <div >

      {
        loading ?
          <div className='loading'>

            <BarLoader
              color={'#367bd6'}
              loading={loading}
              cssOverride={override}

              height={6}

              width={220}

              aria-label="Loading Spinner"
              data-testid="loader"
            />

          </div>
          :
          <div

            style={{
              background: darkMode ? "#1B2430" : "",
              color: darkMode ? "white" : "",
            }}
          >

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
              <Route path='/login' element={user ? <Home></Home> : <Login></Login>}></Route>
              <Route path='/service/:serviceId' element={<Details></Details>}></Route>
              <Route path='/signup' element={user ? <Home></Home> : <Signup></Signup>}></Route>

              <Route path='*' element={<Error></Error>}></Route>

            </Routes>

            <Footer></Footer>

          </div>
      }











    </div>
  );
}

export default App;
