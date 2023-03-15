import React from 'react';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
// import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import useProducts from '../data/useProducts';
import useCart from '../data/useCart';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { useUpdateProfile } from 'react-firebase-hooks/auth';

const Signup = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [error, setError] = useState('');
    const [agree, setAgree] = useState(false);

    const auth = getAuth(app);
    const nevigate = useNavigate();

    // const [
    //     createUserWithEmailAndPassword,
    //     user,

    // ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const handleemailBlur = event => {
        setEmail(event.target.value)
    }

    const handlenameBlur = event => {
        setName(event.target.value)
    }

    const handlepasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handlecpasswordBlur = event => {
        setConfirmpassword(event.target.value)
    }

    const createUser = async (event) => {
        event.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password, { sendEmailVerification: true })
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                nevigate('/');
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

        // if (password !== confirmpassword) {
        //     setError('your password didnt match ')
        //     return;
        // }

        // if (password.length < 6) {
        //     setError('password must be 6 charecter or longer')
        //     return
        // }




        // await createUserWithEmailAndPassword(email, password, { sendEmailVerification: true });

        // console.log(user)


        await updateProfile({ displayName: name });



        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         const cruser = result.user;
        //         console.log(cruser);

        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })


    }

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

    // if (user) {
    //     nevigate('/');
    // }


    return (

        <div>
            <Header></Header>
            <div className='login-container p-5'>


                <form onSubmit={createUser}>
                    <h1 className='fw-bolder fs-2 title'>SIGNUP</h1>
                    <p className='text-danger text-center'>{error}</p>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input onBlur={handlenameBlur} type="text" class="form-control" id="name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onBlur={handleemailBlur} required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" required class="form-label">Password</label>
                        <input onBlur={handlepasswordBlur} type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="confirmpassword" class="form-label">Confirm Password</label>
                        <input onBlur={handlecpasswordBlur} type="password" class="form-control" id="confirmpassword" />
                    </div>
                    <div class="mb-3 form-check">
                        <input onClick={() => setAgree(!agree)} type="checkbox" name='terms' class="form-check-input" />
                        <label htmlFor="terms" class="form-check-label" >Accept Terms and Conditions</label>
                    </div>
                    <button type="submit" className={agree ? 'btn btn-primary d-block w-100 mb-3' : 'btn btn-light d-block w-100 mb-3 disabled'} class="btn btn-primary d-block w-100 mb-3">Sign Up</button>
                    <p>Already Have an account?</p> <Link to="/login" className='text-primary pe-auto  text-decoration-none'>Please login</Link>
                </form>


            </div>
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

export default Signup;