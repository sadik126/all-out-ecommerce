import React from 'react';
import banner from '../../images/grad.avif'
import happy from '../../images/happy.jpg'
import './Officer.css';

const Officer = () => {
    return (
        <section className='container-fluid mt-5 ' style={{ background: `url(${banner})`, backgroundSize: 'cover' }}>
            {/* <img style={{ width: '100%' }} src={banner} alt="" /> */}
            <div className="row align-items-center p-5" >
                <div className="col-md-6">
                    <div>
                        <img className='img-fluid' style={{ borderRadius: '100px' }} src={happy} alt="" />

                    </div>

                </div>
                <div className="col-md-6">

                    <small className='text-uppercase text-dark' >About us</small>
                    <h1 className='text-uppercase text-white'>We are qualified <br /> & of experience <br /> in this field</h1>
                    <div className='w-25' style={{ borderBottom: '5px solid black' }} ></div>
                    <p className='py-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quis quas excepturi provident? Incidunt maiores asperiores,</p>

                    <p className='py-3 text-white'> quod distinctio consequuntur nam atque consequatur pariatur iste voluptates molestiae? Sapiente expedita animi nihil?</p>
                    <button className='btn' style={{ backgroundColor: '#18a18e', color: 'white', fontWeight: '600' }}>Get More Info</button>

                </div>
            </div>

        </section>
    );
};

export default Officer;