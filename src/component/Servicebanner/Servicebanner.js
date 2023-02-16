import React from 'react';
import img1 from '../../images/calendar.png';
import img2 from '../../images/phone-call.png';
import img3 from '../../images/placeholder.png';
import './Servicebanner.css';

const Servicebanner = () => {
    return (

        <div className='conatiner mx-auto' style={{ maxWidth: '1140px', marginTop: '10rem' }}>
            <p className='text-uppercase'>We</p>
            <h3 className='text-uppercase title'>offers</h3>
            <div className='w-25' style={{ borderBottom: '5px solid black' }} ></div>
            <p className='text-secondary text-center'>Shipping is a key factor in customer satisfaction, and e-commerce sites should offer fast and reliable shipping options at a reasonable cost.

                Product information and images: Detailed product information, high-quality images, and customer reviews are essential for helping customers make informed purchasing decisions.

                Customer service: Good customer service is critical for building customer loyalty and resolving any issues that may arise during the shopping experience.</p>
            <div className="row mt-4" style={{ padding: '30px' }}>
                <div className="col-md-4 col-sm-12 d-flex align-items-center justify-content-center">
                    <div className='w-25 mx-auto' >
                        <img className='img-fluid p-3' src={img1} alt="" />

                    </div>
                    {/* <img className='w-50 img-fluid p-3' src={img1} alt="" /> */}
                    <div className='w-50' >
                        <p className=''>We are open monday-friday</p>
                        <h4 className=''>7:00 am - 9:00 pm</h4>
                    </div>

                </div>

                <div className="col-md-4 col-sm-12 d-flex align-items-center justify-content-center">
                    <div className='w-25 mx-auto' >
                        <img className='img-fluid p-3' src={img2} alt="" />

                    </div>
                    {/* <img className=' w-50 img-fluid p-3' src={img2} alt="" /> */}
                    <div className='w-50' >
                        <p className=''>Have a question?</p>
                        <h4 className=''>+8801400156406</h4>
                    </div>

                </div>

                <div className="col-md-4 col-sm-12 d-flex align-items-center justify-content-center">
                    <div className='w-25 mx-auto' >
                        <img className='img-fluid p-3' src={img3} alt="" />

                    </div>
                    {/* <img className=' w-50 img-fluid p-3' src={img3} alt="" /> */}
                    <div className='' >
                        <p className=''>Need a repair? our address</p>
                        <h4 className=''>Liza Street, New York</h4>
                    </div>

                </div>

            </div>

        </div>


    );
};

export default Servicebanner;