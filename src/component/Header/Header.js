import React, { useContext, useEffect, useState } from 'react';

import './Header.css';

import image from '../../images/logo.png'
import { Link, useMatch, useResolvedPath, NavLink, LinkProps } from 'react-router-dom';
import { getproduct } from '../../utilities/fakedb';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';
import { themeContext } from '../../Context';
import Themetoggle from '../Themetoggle/Themetoggle';
// import type { LinkProps } from "react-router-dom";




const Header = (props) => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    // const [theme, setTheme] = useState('lighttheme')



    // const setDarkmode = () => {
    //     if (theme === 'darktheme') {
    //         setTheme('lighttheme')
    //     }
    //     else {
    //         setTheme('darktheme')
    //     }
    // }


    // useEffect(() => {
    //     document.body.className = theme;
    //     document.querySelectorAll('a').className = theme;
    //     // document.querySelectorAll('a').className = theme;
    //     // document.getElementById('li').className = theme;
    // }, [theme])
    const auth = getAuth(app);
    const [user] = useAuthState(auth)


    const handlesignOUT = () => {
        signOut(auth);
    }

    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? "red" : "black" }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
                {match && " (active)"}
            </div>
        );
    }




    const Handlesearch = props.Handlesearch;
    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('https://allout-server.vercel.appproducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])


    useEffect(() => {
        const storedCart = getproduct();

        const savedcart = [];
        for (const id in storedCart) {
            const cartproduct = products.find(product => product._id === id)

            if (cartproduct) {


                const quantity = storedCart[id];
                cartproduct.quantity = quantity;
                savedcart.push(cartproduct);

            }
        }

        setCart(savedcart);


    }, [products])

    // const cart = props.cart;

    // const quantity = props.quantity;
    // const [darkMode, setDarkMode] = useState(false);



    return (

        <div>
            <div class="container-fluid">
                <div class="">
                    <nav className="navbar sticky-top navbar-expand-lg  rounded">
                        <div class="container-fluid">	<Link className='logo' to="/"><img class="" src={image} alt="" /></Link>
                            <button className={darkMode ? "navbar-toggler bg-light" : "navbar-toggler bg-dark"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
                            </button>

                            {/* <button onClick={() => setDarkmode()}>
                                Toggle Dark Mode
                            </button> */}
                            <Themetoggle></Themetoggle>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent2">
                                <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
                                    <li > <NavLink style={{ color: darkMode ? "white" : "" }} className={({ isActive, isPending }) => {
                                        return isActive ? "nav-link active text-danger" : "nav-link active";
                                    }} class="nav-link" aria-current="page" to="/home"><i class='bi bi-house-door me-1'></i>Home</NavLink>
                                    </li>
                                    <li > <NavLink style={{ color: darkMode ? "white" : "" }} className={({ isActive, isPending }) => {
                                        return isActive ? "nav-link active text-danger" : "nav-link active";
                                    }} class="nav-link" to="/orders"><i class='bi bi-people me-1'></i>Orders</NavLink>
                                    </li>
                                    <li > <NavLink style={{ color: darkMode ? "white" : "" }} className={({ isActive, isPending }) => {
                                        return isActive ? "nav-link active text-danger" : "nav-link active";
                                    }} class="nav-link " to="/products"><i class='bi bi-grid-1x2-fill me-1'></i>Products</NavLink>
                                    </li>
                                    <li > <NavLink style={{ color: darkMode ? "white" : "" }} className={({ isActive, isPending }) => {
                                        return isActive ? "nav-link active text-danger" : "nav-link active";
                                    }} class="nav-link " to="/contact"><i class='bi bi-mic-mute-fill me-1'></i>Contact</NavLink>
                                    </li>
                                    <li > <NavLink style={{ color: darkMode ? "white" : "" }} className={({ isActive, isPending }) => {
                                        return isActive ? "nav-link active text-danger" : "nav-link active";
                                    }} class="nav-link" to="/about"><i class='bi bi-question-square-fill me-1'></i>About</NavLink>
                                    </li>


                                    {
                                        user ? <li > <NavLink style={{ color: darkMode ? "white" : "" }} onClick={handlesignOUT} className={({ isActive, isPending }) => {
                                            return isActive ? "nav-link active text-danger" : "nav-link active";
                                        }} class="nav-link" to="/"><i class="bi bi-door-closed-fill"></i>Logout</NavLink>
                                        </li> :
                                            <li > <NavLink style={{ color: darkMode ? "white" : "" }} className={({ isActive, isPending }) => {
                                                return isActive ? "nav-link active text-danger" : "nav-link active";
                                            }} class="nav-link" to="/login"><i class="bi bi-door-open"></i>Login</NavLink>
                                            </li>



                                    }

                                    {
                                        user ? <li > <NavLink style={{ color: darkMode ? "white" : "" }} className={({ isActive, isPending }) => {
                                            return isActive ? "nav-link active text-danger" : "nav-link active";
                                        }} class="nav-link" to="/">{user.displayName}</NavLink>
                                        </li> : <li > <NavLink style={{ color: darkMode ? "white" : "" }} className={({ isActive, isPending }) => {
                                            return isActive ? "nav-link active text-danger" : "nav-link active";
                                        }} class="nav-link" to="/signup"><i class="bi bi-key-fill"></i>Signup</NavLink>
                                        </li>
                                    }



                                    {/* <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a>
                                            </li>
                                            <li><a class="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                {/* <hr class="dropdown-divider"> */}
                                    {/* </li>
                                            <li><a class="dropdown-item" href="#">Something else here</a>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <form class="d-flex">
                                        {/* <button class="btn btn-light px-4" type='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" ><i class="bi bi-cart-fill"></i> Buy Now {cart.length}</button> */}
                                        <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" type="button" class="btn btn-outline-primary position-relative"> <i class="bi bi-cart-fill"></i> Cart <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cart.length} <span class="visually-hidden">unread messages</span></span>
                                        </button>
                                    </form>



                                </ul>




                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </div>
    );
};

export default Header;