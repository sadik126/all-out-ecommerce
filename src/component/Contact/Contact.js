import React from 'react';
import Header from '../Header/Header';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-center mb-5'>Contact page</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7301.37826090897!2d90.37849452367826!3d23.79408190519607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7317100df57%3A0x91083163723b4822!2sIbrahimpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1669817142439!5m2!1sen!2sbd" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>



            <div className="container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/mrgdwkzr" method="post">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter your name" name='username' autoComplete='off' required />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' autoComplete='off' required />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Type your message</label>
                            <textarea class="form-control" name='message' id="exampleFormControlTextarea1" rows="3" autoComplete='off' required></textarea>
                        </div>


                        <button className='btn-grad'>Submit</button>
                    </form>

                </div>
            </div>

        </div>

    );
};

export default Contact;