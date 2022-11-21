import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import './Productdata.css';



const Productdata = (props) => {

    const { name, ratings, id, price, img } = props.product

    const star = Array.from({ length: 5 }, (elem, index) => {

        let number = index + 0.5;




        return (
            <span key={index}>
                {
                    ratings > index ? (<FaStar className='star'></FaStar>) :
                        ratings > number ? (<FaStarHalfAlt className='star'></FaStarHalfAlt>) : (<AiOutlineStar className='star'></AiOutlineStar>)

                }
            </span>
        );
    })

    return (
        // <div className='card-body'>
        //     <div className='product-grid'>
        //         <div className='row row-cols-1 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-3'>
        <div class="col  d-flex align-items-stretch">
            <div class="card border shadow-none mb-0">
                <div class="card-body text-center">
                    <img src={img} class="img-fluid mb-3" alt="" />
                    <h6 class="product-title">{name}</h6>
                    <p class="product-price fs-5 mb-1"><span>${price}</span></p>
                    <div class="rating mb-0">
                        {
                            star
                        }





                        {/* <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i> */}
                    </div>
                    <small>74 Reviews</small>
                    <div class="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                        <a href="javascript:;" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-fill"></i> Details</a>
                        <button onClick={() => props.addtocart(props.product)} class="btn btn-sm btn-outline-success"><i class="bi bi-cart-fill"></i> Add to cart</button>
                    </div>
                </div>
            </div>
        </div>

        //         </div>

        //     </div>


        // </div>
    );
};

export default Productdata;