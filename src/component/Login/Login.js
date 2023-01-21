import { getAuth } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import Social from '../Social/Social';
import './Login.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const auth = getAuth(app);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const handleemailBlur = event => {
        setEmail(event.target.value)
    }

    const handlepasswordBlur = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        // const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('sent verification email . please check your email', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            toast.error('Please enter your Email here', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }


    }



    const handlesigninBlur = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Header></Header>
            <div className='login-container p-5'>


                <form onSubmit={handlesigninBlur}>
                    <h1 className='fw-bolder fs-2 title'>LOGIN</h1>
                    <p className='text-danger'>{error?.message}</p>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onChange={handleemailBlur} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input onChange={handlepasswordBlur} type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    {/* <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    {/* {
                        loading && <p>Loading....</p>
                    } */}
                    <button type="submit" class="btn btn-primary d-block w-100 mb-3">Login</button>
                    <p>New to all out shopping?</p> <Link to="/signup" className='text-primary pe-auto  text-decoration-none'>Please register</Link>

                </form>
                <button onClick={resetPassword} className='text-danger btn btn-link text-decoration-none'>Forgot password</button>

                <ToastContainer position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored" />

                <Social></Social>


            </div>

        </div>
    );
};

export default Login;