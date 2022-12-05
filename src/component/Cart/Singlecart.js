import React from 'react';
import './Singlecart.css';

const Singlecart = (props) => {
    const { single, HandleremoveCart } = props
    const { name, img, price, quantity } = single;
    return (
        <div>
            <div className="conatiner">
                <div className="row">
                    <div className="col-md-2 col-6">
                        <div className='d-flex'>
                            <img class="rounded-circle w-25 img-fluid" src={img} alt="" />
                            <p className='text-center'>{name.length > 12 ? name.slice(0, 12) + '....' : name}</p>

                        </div>


                    </div>
                    <div className="col-md-2 d-md-block d-none">
                        <p className='text-center'>{price}</p>

                    </div>
                    <div className="col-md-2 col-2">
                        <p className='text-center'>{quantity}</p>

                    </div>
                    <div className="col-md-2 d-md-block d-none">
                        <p className='text-center'>Subtotal</p>

                    </div>
                    <div className="col-md-4 col-4">
                        <p className='text-center'><button onClick={() => HandleremoveCart(single)} className='rounded-circle btn btn-danger'><i class="bi bi-trash3-fill"></i></button></p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Singlecart;