import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4 col-sm-12  d-flex  flex-column justify-content-center align-items-center">
                    <i class="bi bi-truck icon"></i>
                    <p>Super fast and free delivery</p>

                </div>
                <div className="col-md-4 col-sm-12 ">
                    <div className='d-flex justify-content-center align-items-center flex-column mb-md-5 mb-3'>
                        <i class="bi bi-shield-shaded icon"></i>
                        <p>Non conatct shipping</p>

                    </div>

                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <i class="bi bi-piggy-bank-fill icon"></i>
                        <p>Money back garunteed</p>

                    </div>

                </div>
                <div className="col-md-4 col-sm-12 flex-sm-column d-flex flex-column justify-content-center align-items-center">
                    <i class="bi bi-shield-fill-check icon"></i>
                    <p>Secure payment system</p>

                </div>

            </div>

        </div>
    );
};

export default Services;