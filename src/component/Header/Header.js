import React, { useEffect, useState } from 'react';

import './Header.css';

import image from '../../images/logo.png'
import { Link, useMatch, useResolvedPath, NavLink, LinkProps } from 'react-router-dom';
import { getproduct } from '../../utilities/fakedb';
// import type { LinkProps } from "react-router-dom";




const Header = (props) => {

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
        fetch('../../fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])


    useEffect(() => {
        const storedCart = getproduct();

        const savedcart = [];
        for (const id in storedCart) {
            const cartproduct = products.find(product => product.id === id)

            if (cartproduct) {


                const quantity = storedCart[id];
                cartproduct.quantity = quantity;
                savedcart.push(cartproduct);

            }
        }

        setCart(savedcart);


    }, [products, cart])

    // const cart = props.cart;

    // const quantity = props.quantity;

    return (
        <div>
            <div class="container-fluid">
                <div class="">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-light rounded">
                        <div class="container-fluid">	<Link className='logo' to="/"><img class="" src={image} alt="" /></Link>
                            <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent2">
                                <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
                                    <li > <NavLink className={({ isActive, isPending }) => {
                                        return isActive ? "nav-link active text-primary" : "nav-link active text-dark";
                                    }} class="nav-link active text-dark" aria-current="page" to="/home"><i class='bi bi-house-door me-1'></i>Home</NavLink>
                                    </li>
                                    <li > <NavLink className={({ isActive, isPending }) => {
                                        return isActive ? "nav-link active text-primary" : "nav-link active text-dark";
                                    }} class="nav-link text-dark" to="/orders"><i class='bi bi-people me-1'></i>Orders</NavLink>
                                    </li>
                                    <li > <NavLink className={({ isActive, isPending }) => {
                                        return isActive ? "nav-link active text-primary" : "nav-link active text-dark";
                                    }} class="nav-link text-dark" to="/products"><i class='bi bi-grid-1x2-fill me-1'></i>Products</NavLink>
                                    </li>
                                    <li > <NavLink className={({ isActive, isPending }) => {
                                        return isActive ? "nav-link active text-primary" : "nav-link active text-dark";
                                    }} class="nav-link text-dark" to="/contact"><i class='bi bi-mic-mute-fill me-1'></i>Contact</NavLink>
                                    </li>
                                    <li > <NavLink className={({ isActive, isPending }) => {
                                        return isActive ? "nav-link active text-primary" : "nav-link active text-dark";
                                    }} class="nav-link text-dark" to="/about"><i class='bi bi-question-square-fill me-1'></i>About</NavLink>
                                    </li>

                                    <li > <NavLink className={({ isActive, isPending }) => {
                                        return isActive ? "nav-link active text-primary" : "nav-link active text-dark";
                                    }} class="nav-link text-dark" to="/login"><i class="bi bi-door-open"></i>Login</NavLink>
                                    </li>

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
                                    <li > <NavLink className={({ isActive, isPending }) => {
                                        return isActive ? "nav-link active text-primary" : "nav-link active text-dark";
                                    }} class="nav-link text-dark" to="/signup"><i class="bi bi-key-fill"></i>Signup</NavLink>
                                    </li>
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