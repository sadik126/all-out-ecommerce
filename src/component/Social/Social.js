import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import Google from '../../images/Googleimg/google.png';
import facebook from '../../images/Googleimg/facebook.webp';
import github from '../../images/Googleimg/github.webp'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Social = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const auth = getAuth(app);

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const nevigate = useNavigate()

    if (user) {
        nevigate('/');
    }

    let errorElement;

    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error:{error?.message} {error1?.message}</p>
        </div>
    }
    return (
        <div className='w-50'>
            <div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div style={{ height: '1px' }} className='bg-dark w-25'></div>
                    <p className='mt-2 px-2'>Or</p>
                    <div style={{ height: '1px' }} className='bg-dark w-25'></div>

                </div>
                {/* {
                loading && <Loading></Loading>
            } */}

                {
                    errorElement
                }
                <div className='text-center'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-dark w-100 d-block mx-auto '>
                        <img style={{ width: '30px' }} src={Google} alt="" />
                        Google sign in
                    </button>

                    <button style={{ backgroundColor: '#2c6aa1' }} className='btn btn-dark  mt-2 w-100 d-block mx-auto '>
                        <img style={{ width: '30px' }} src={facebook} alt="" />
                        Facebook sign in
                    </button>


                    <button onClick={() => signInWithGithub()} style={{ backgroundColor: '#2ca181' }} className='btn btn-dark  mt-2 w-100 d-block mx-auto '>
                        <img style={{ width: '30px' }} src={github} alt="" />
                        Github sign in
                    </button>

                </div>
            </div>

        </div>
    );

};

export default Social;