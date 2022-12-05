import React from 'react';
import { removeFromDb } from '../../utilities/fakedb';
import useCart from '../data/useCart';
import useProducts from '../data/useProducts';
import Header from '../Header/Header';
import Singlecart from './Singlecart';

const Cart = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const data = {
        name: "ALL OUT ECOMMERCE",
    }

    const HandleremoveCart = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
        // console.log(product)
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
    return (
        <div>
            <Header></Header>
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
                            cart.map(single => <Singlecart id={single.id} HandleremoveCart={HandleremoveCart} single={single}></Singlecart>)
                        }
                    </div>



                </div>
            </div>







            <div className="cart">


                <div class="switcher-body">
                    {/* <button class="btn btn-primary btn-switcher shadow-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-paint-bucket me-0"></i></button> */}
                    <div class="offcanvas offcanvas-end shadow border-start-0 p-1" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling">
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