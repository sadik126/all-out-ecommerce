import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Signup = () => {
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');
    const { name, setName } = useState('');
    const { confirmpassword, setConfirmpassword } = useState('');
    const { error, setError } = useState('');


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


    return (

        <div>
            <Header></Header>
            <div className='login-container p-5'>


                <form>
                    <h1 className='fw-bolder fs-2 title'>SIGNUP</h1>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input onBlur={handlenameBlur} type="text" class="form-control" id="name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onBlur={handleemailBlur} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input onBlur={handlepasswordBlur} type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="confirmpassword" class="form-label">Confirm Password</label>
                        <input onBlur={handlecpasswordBlur} type="cpassword" class="form-control" id="confirmpassword" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary d-block w-100 mb-3">Submit</button>
                    <p>Already Have an account?</p> <Link to="/login" className='text-primary pe-auto  text-decoration-none'>Please login</Link>
                </form>


            </div>
        </div>
    );
};

export default Signup;