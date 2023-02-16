import React from 'react';
import person from '../../images/side.jpg';
import blob from '../../images/blob.svg';

const Short = () => {
    return (
        <div className='container my-5'>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div>
                        <div className='position-relative'>
                            <img style={{ borderRadius: '10px' }} className='w-100 h-100' src={blob} alt="" />
                            <img style={{ right: '125px', bottom: '64px', borderRadius: '10px' }} className='w-50 img-fluid position-absolute' src={person} alt="" />

                        </div>

                    </div>

                </div>
                <div className="col-md-6">
                    <small className='text-uppercase' >About us</small>
                    <h1 className='text-uppercase title'>We are qualified <br /> & of experience <br /> in this field</h1>
                    <div className='w-25' style={{ borderBottom: '5px solid black' }} ></div>
                    <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quis quas excepturi provident? Incidunt maiores asperiores,</p>

                    <p className='py-3'> quod distinctio consequuntur nam atque consequatur pariatur iste voluptates molestiae? Sapiente expedita animi nihil?</p>
                    <button className='btn' style={{ backgroundColor: 'orangered', color: 'white', fontWeight: '600' }}>Get More Info</button>

                </div>
            </div>

        </div>
    );
};

export default Short;
