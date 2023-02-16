import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className='container'>
            <p className='text-uppercase'>Provided</p>
            <h3 className='text-uppercase title'>services</h3>
            <div className='w-25' style={{ borderBottom: '5px solid black' }} ></div>
            <p className='text-secondary text-center'>A well-designed, user-friendly interface is crucial for a positive shopping experience. It should be easy to navigate, search for products, and make a purchase.With the increasing use of mobile devices for online shopping, it's important that the e-commerce site is optimized for mobile viewing.E-commerce sites should offer a range of secure payment options, such as credit card processing, PayPal, and others</p>

            <div className="row mt-5">

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