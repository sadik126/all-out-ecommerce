import React from 'react';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import Header from '../Header/Header';
import remove from '../../images/Googleimg/lost-transformed.png'
import './Error.css';

const Error = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div>
            <Header></Header>
            <div class="error-404 d-flex align-items-center justify-content-center">
                <div class="container">
                    <div class=" py-5" style={{ background: darkMode ? "#1b2430" : "" }}>
                        <div class="row g-0">
                            <div class="col col-xl-5">
                                <div class="card-body p-4">
                                    <h1 class="display-1"><span class="text-danger">4</span><span class="text-primary">0</span><span class="text-success">4</span></h1>
                                    <h2 class="font-weight-bold display-4">Lost in Space</h2>
                                    <p>You have reached the edge of the universe.
                                        <br />The page you requested could not be found.
                                        <br />Dont'worry and return to the previous page.</p>
                                    <div class="mt-5"> <a href="/" class="btn btn-primary btn-lg px-md-5 radius-30">Go Home</a>
                                        <a href="/" className={darkMode ? "btn btn-outline-light btn-lg ms-3 px-md-5 radius-30" : "btn btn-outline-dark btn-lg ms-3 px-md-5 radius-30"}>Back</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-7">
                                <img src={remove} class="img-fluid" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Error;