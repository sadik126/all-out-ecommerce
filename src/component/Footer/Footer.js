import React from 'react';
import './Footer.css';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='d-flex align-items-center justify-content-between  footerhead'>
                <p>Ready to get started</p>
                <button className='btn-grad'>Get started</button>

            </div>
            <div className='mainfooter container-fluid'>
                <div className="row">
                    <div className="col-md-3 mb-5">
                        <p>Rayhan sadik</p>
                        <small style={{ lineHeight: 'normal' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic ?</small>

                    </div>
                    <div className="col-md-3 mb-5">
                        <p>Subscribe to get important updates</p>
                        <form action="" method="post">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' autoComplete='off' required />
                            </div>

                            <input className='btn-grad1' type="submit" value="subcribe" />

                        </form>

                    </div>
                    <div className="col-md-3 mb-5">
                        <p className='text-center'>Follow us</p>
                        <div className="footer-social--icons d-flex align-content-center justify-content-center">
                            <div>
                                <FaDiscord className="icons" />
                            </div>
                            <div>
                                <FaInstagram className="icons" />
                            </div>
                            <div>
                                <a
                                    href="#"
                                    target="_blank">
                                    <FaYoutube className="icons" />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 mb-5">
                        <p>Call us</p>
                        <a href="tel:01400156406" className='phone'>+88 01400156406</a>

                    </div>
                </div>

                <div className="bottom-footer">
                    <hr style={{ color: 'white' }} />

                    <div className="row">
                        <div className="col-md-6">
                            <p className='text-white text-center'>@{new Date().getFullYear()} Rayhan Sadik . All Rights Reserved</p>

                        </div>
                        <div className="col-md-6">
                            <div className='text-white'>
                                <p className='text-center'>Privacy policy</p>
                                <p className='text-center'>TERMS AND CONDITIONS</p>
                            </div>

                        </div>
                    </div>


                </div>

            </div>


        </div>
    );
};

export default Footer;