import React from 'react';
import useCart from '../data/useCart';
import useProducts from '../data/useProducts';
import Header from '../Header/Header';
import './Contact.css';
import '../Cart/Cart.css'

const Contact = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

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
            <h1 className='text-center mb-5'>Contact page</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7301.37826090897!2d90.37849452367826!3d23.79408190519607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7317100df57%3A0x91083163723b4822!2sIbrahimpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1669817142439!5m2!1sen!2sbd" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>



            <div className="container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/mrgdwkzr" method="post">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter your name" name='username' autoComplete='off' required />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' autoComplete='off' required />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Type your message</label>
                            <textarea class="form-control" name='message' id="exampleFormControlTextarea1" rows="3" autoComplete='off' required></textarea>
                        </div>


                        <button className='btn-grad'>Submit</button>
                    </form>

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

export default Contact;