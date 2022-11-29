import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = (props) => {
    const { name } = props.name
    return (
        <div>
            <div className="container mt-5">
                <div className="row align-items-center bg">
                    <div className="col-md-6 mt-5">
                        <p style={{ fontSize: '20px' }}>Welcome to</p>
                        <h1 className='title'>{name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eos consectetur quae aspernatur dolore maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa beatae officiis repellat?</p>
                        <NavLink style={{ textDecoration: 'none' }}>
                            <button className='btn-grad'> <span style={{ textDecoration: 'none' }}>shop now</span> </button>



                        </NavLink>
                    </div>
                    <div className="col-md-6 mt-5">
                        <figure >
                            <img src="images/hero.jpg" className='img-fluid rounded ' alt="" />


                        </figure>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;