import React from 'react';
import Header from '../Header/Header';
import './Error.css';

const Error = () => {
    return (
        <div>
            <Header></Header>
            <div class="error-404 d-flex align-items-center justify-content-center">
                <div class="container">
                    <div class="card py-5">
                        <div class="row g-0">
                            <div class="col col-xl-5">
                                <div class="card-body p-4">
                                    <h1 class="display-1"><span class="text-danger">4</span><span class="text-primary">0</span><span class="text-success">4</span></h1>
                                    <h2 class="font-weight-bold display-4">Lost in Space</h2>
                                    <p>You have reached the edge of the universe.
                                        <br />The page you requested could not be found.
                                        <br />Dont'worry and return to the previous page.</p>
                                    <div class="mt-5"> <a href="javascript:;" class="btn btn-primary btn-lg px-md-5 radius-30">Go Home</a>
                                        <a href="javascript:;" class="btn btn-outline-dark btn-lg ms-3 px-md-5 radius-30">Back</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-7">
                                <img src="https://imgs.search.brave.com/gZvdKAPUEfOixuln_3DMukSRrLtFJrSVbdoUJqeIMOQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/bG92ZXBpay5jb20v/ZWxlbWVudC80MDAy/MS83ODY2LnBuZ18x/MjAwLnBuZw" class="img-fluid" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Error;