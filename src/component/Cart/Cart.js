import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../../Context';
import { deleteShoppingCart, getproduct, removeFromDb } from '../../utilities/fakedb';
import useCart from '../data/useCart';
import useProducts from '../data/useProducts';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import Singlecart from './Singlecart';

const Cart = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const [cartdata, setcartData] = useState(null);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        // const storedCart = getproduct();
        // const savedcart = [];
        // for (const id in storedCart) {
        //     const addedproduct = products.find(product => product._id === id);
        //     if (addedproduct) {
        //         const quantity = storedCart[id];
        //         addedproduct.quantity = quantity;
        //         savedcart.push(addedproduct);

        //     }
        // }



        // setCart(savedcart)
        const savedData = localStorage.getItem('shopping-cart');
        if (savedData) {
            setcartData(JSON.parse(savedData));
        }
        setLoading(false);

    }, [])


    if (loading) {
        return <Loading></Loading>
    }


    // const [loading,setLoading] = 
    // const [quantitys, setQuantitys] = useState(cart.quantity)
    // console.log(quantitys)
    const data = {
        name: "ALL OUT ECOMMERCE",
    }

    const HandleremoveCart = (product) => {
        const rest = cart.filter(pd => pd._id !== product._id)
        setCart(rest)
        removeFromDb(product._id)
        // console.log(product)
    }

    const Increase = (id) => {
        let shoppingCart = {};
        const storedCart = localStorage.getItem('shopping-cart');
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        }

        const quantity = shoppingCart[id];
        if (quantity) {
            const newQuantity = quantity + 1;
            shoppingCart[id] = newQuantity;
        }
        else {
            shoppingCart[id] = 1;
        }
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));


    }

    const decrease = (id) => {
        let shoppingCart = {};
        const storedCart = localStorage.getItem('shopping-cart');
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        }

        const quantity = shoppingCart[id];
        if (quantity) {
            const newQuantity = quantity - 1;
            shoppingCart[id] = newQuantity;
        }
        else {
            shoppingCart[id] = 1;
        }
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }

    const removeallItem = () => {
        deleteShoppingCart()
    }

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {


        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;

        shipping = shipping + product.shipping

    }

    let tax = parseFloat((total * 10 / 100).toFixed(2));

    let grandtotal = total + shipping + tax;

    // console.log(cart)
    return (
        <div>
            <Header></Header>
            {
                //    cart?.length === 0 ? <h1 className='text-center'>There is no Item. please Add some products.<Link to='/products'>Shop here</Link></h1> :
                <div className="container">
                    <div className="row">

                        <div className="col-md-2 col-4">
                            <p className='text-center'>Item</p>

                        </div>
                        <div className="col-md-2 d-md-block d-none">
                            <p className='text-center'>Price</p>

                        </div>
                        <div className="col-md-2 col-4">
                            <p className='text-center'>Quantity</p>

                        </div>
                        <div className="col-md-2 d-md-block d-none">
                            <p className='text-center'>Subtotal</p>

                        </div>
                        <div className="col-md-4 col-4">
                            <p className='text-center'>Remove</p>

                        </div>
                        <hr />

                        <div className="cart-item">
                            {
                                cart.map(single => <Singlecart id={single._id} decrease={decrease} Increase={Increase} HandleremoveCart={HandleremoveCart} single={single}></Singlecart>)
                            }
                        </div>



                    </div>

                    <div className='d-flex justify-content-between g-4'>
                        <div>
                            <Link to='/products'><button className='btn btn-info'>Continue Shopping</button></Link>


                        </div>
                        <div className='d-flex g-5 flex-column'>
                            <Link to='/checkout'> <button className='btn btn-success me-3'>Checkout</button></Link>
                            <button onClick={removeallItem} className='btn btn-danger mt-3'>Clear cart</button>

                        </div>
                    </div>
                </div>
            }








            <div className="cart">


                <div class="switcher-body">
                    {/* <button class="btn btn-primary btn-switcher shadow-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-paint-bucket me-0"></i></button> */}
                    <div style={{ background: darkMode ? "#2a2b36" : "" }} class="offcanvas offcanvas-end shadow border-start-0 p-1" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling">
                        <div class="offcanvas-header border-bottom">
                            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Order summary</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>

                        </div>
                        <div class="offcanvas-body">
                            <h6 class="mb-0 text-center">Cart details</h6>
                            <hr />
                            <h6>Total Product : {cart.length} items</h6>
                            <small>Total price: {total} BDT</small>
                            <br />
                            <small>Shipping: {shipping} BDT</small>
                            <br />
                            <small>Tax: {tax} BDT</small>
                            <hr />
                            <h4>Grand Total : {grandtotal}</h4>

                            {/* <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="LightTheme" value="option1" />
                                <label class="form-check-label" for="LightTheme">Light</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="DarkTheme" value="option2" />
                                <label class="form-check-label" for="DarkTheme">Dark</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="SemiDarkTheme" value="option3" />
                                <label class="form-check-label" for="SemiDarkTheme">Semi Dark</label>
                            </div>
                            <hr />
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="MinimalTheme" value="option3" checked />
                                <label class="form-check-label" for="MinimalTheme">Minimal Theme</label>
                            </div> */}
                            {/* <hr />
                            <h6 class="mb-0">Header Colors</h6> */}
                            <hr />

                            <a href="/cart" className='btn-grad2'>Go to cart</a>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Cart;