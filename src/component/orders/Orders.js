import React from 'react';
import useCart from '../data/useCart';
import useProducts from '../data/useProducts';
import Header from '../Header/Header';
import '../Cart/Cart.css';
import Order from './Order';
import { useQuery } from '@tanstack/react-query';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import Loading from '../Loading/Loading';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Confirmationmodal from '../Confirmationmodal/Confirmationmodal';

const Orders = () => {
    const auth = getAuth(app);
    const [user] = useAuthState(auth)
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false);

    const [deletingUser, setdeletingUser] = useState(null)

    const closeModal = () => {
        setdeletingUser(null)
    }



    const { data: orders = [], refetch, isLoading, isFetching } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:6060/orders?email=${user?.email}`)
            const data = await res.json()
            setLoading(false)
            return data
        }
    })

    const handleShow = () => setShow(true);

    if (isLoading || loading) {
        return <Loading></Loading>
    }


    const deleteOrder = order => {
        fetch(`http://localhost:6060/orders/${order._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast(`${order.name} is deleted`)
                    refetch()
                }

            })
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
            {/* <h1>this is orders{products.length}</h1>
            <p> cart has {cart.length}</p> */}

            <div className='table-responsive'>
                <table class="table align-middle" style={{ color: darkMode ? "white" : "" }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Service name</th>

                            <th scope="col">Total</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Payment</th>

                            <th scope="col">Transaction id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [...orders]?.reverse().map(order => <Order key={order._id} deleteOrder={deleteOrder} orders={order}></Order>)
                        }


                    </tbody>


                </table>


                {
                    deletingUser && <Confirmationmodal
                        title={`Are your sure you want to delete?`}
                        message={`If you delete ${deletingUser.name}. it can not be undone`}
                        closeModal={closeModal}
                        modaldata={deleteOrder}
                        deleteOrder={deleteOrder}

                    ></Confirmationmodal>
                }

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

export default Orders;