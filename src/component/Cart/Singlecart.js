import React from 'react';
import './Singlecart.css';

const Singlecart = (props) => {
    const { single, HandleremoveCart, Increase, decrease } = props
    const { name, img, price, quantity } = single;
    return (
        <div>
            <div className="conatiner">
                <div className="row">
                    <div className="col-md-2 col-4">
                        <div className='d-flex'>
                            <img class="rounded-circle w-25 img-fluid" src={img} alt="" />
                            <p className='text-center'>{name.length > 12 ? name.slice(0, 10) + '....' : name}</p>

                        </div>


                    </div>
                    <div className="col-md-2 d-md-block d-none">
                        <p className='text-center'>{price}</p>

                    </div>
                    <div className="col-md-2 col-4 d-flex justify-content-between">
                        <button onClick={() => Increase(single._id)} className='w-25 h-50 btn-outline-success'><i class="bi bi-plus"></i></button>
                        <p className='text-center w-full'>   {quantity} </p>
                        <button onClick={() => decrease(single._id)} className='w-25 h-50 btn-outline-danger'><i class="bi bi-dash"></i></button>

                    </div>
                    <div className="col-md-2 d-md-block d-none">
                        <p className='text-center'>{quantity * price}</p>

                    </div>
                    <div className="col-md-4 col-4">
                        <p className='text-center'><button onClick={() => HandleremoveCart(single)} className='rounded-circle btn btn-danger'><i class="bi bi-trash3-fill"></i></button></p>

                    </div>
                </div>
                <hr />
            </div>

        </div>
    );
};

export default Singlecart;