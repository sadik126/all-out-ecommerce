import { getAuth } from 'firebase/auth';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { themeContext } from '../../Context';
import app from '../../firebase.init';
import useProducts from '../../hooks/useProducts';
import useCart from '../data/useCart';
import Header from '../Header/Header';

const Checkout = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const auth = getAuth(app);
    const [user] = useAuthState(auth)

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    const nevigate = useNavigate();



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

    const setOrders = (e) => {
        e.preventDefault()
        const form = e.target;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.message.value;
        const products = cart;

        const orders = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            address: address,
            products: products,
            total: grandtotal




        }


        fetch('http://localhost:6060/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(orders)

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    toast.success('Purchase confirmed')
                    nevigate(`/payment/${data.insertedId}`)


                }

                else {
                    toast.error(data.message)

                }

            })





        console.log(orders)

    }


    return (
        <div>
            <Header></Header>
            <div className='container mt-0'>
                <h3 className='text-center'>Hello <span className="text-danger">{user?.displayName}</span> </h3>
                <h3 className='text-center'>You are about to order:{cart.length} Items</h3>
                <h4 className='text-center'>Total Price: <span style={{ color: 'orangered' }}>{grandtotal}</span>  BDT</h4>
                <form onSubmit={setOrders} className='w-50 mx-auto'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">First name</label>
                        <input name='firstname' type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter first name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Last name</label>
                        <input name='lastname' type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter last name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input name='email' type="email" class="form-control" defaultValue={user?.email} readOnly id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone number</label>
                        <input name='phone' type="tel" class="form-control" id="exampleFormControlInput1" placeholder="enter phone number" />
                    </div>
                    <div class="mb-3" style={{
                        background: darkMode ? "#1B2430" : "",
                        color: darkMode ? "white" : "",
                    }}>
                        <label for="exampleFormControlTextarea1" class="form-label">Your address</label>
                        <textarea name='message' class="form-control" id="exampleFormControlTextarea1" placeholder='your message' rows="3"></textarea>

                        <div> Your products:
                            {
                                cart.map(single => <span class="badge text-bg-primary text-danger"  >{single.name}(Quantity:{single.quantity})</span>)
                            }

                        </div>





                    </div>

                    <button className='btn btn-danger d-block w-100' type="submit">Place your order</button>


                </form>
                <ToastContainer></ToastContainer>


            </div>
        </div>

    );
};

export default Checkout;