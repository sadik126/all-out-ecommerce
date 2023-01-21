import React, { useContext } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import './Productdata.css';
import { useNavigate } from 'react-router-dom';
import { themeContext } from '../../Context';



const Productdata = (props) => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const { name, ratings, id, price, img } = props.product

    const nevigate = useNavigate();



    const nevigateDetail = id => {
        nevigate(`/service/${id}`)
    }

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
        <div class="col service  d-flex align-items-stretch" >
            <div class="card   shadow-none mb-0" style={{ background: darkMode ? "#1B2430" : "" }}>
                <div class="card-body text-center">
                    <img src={img} style={{ borderRadius: '50px' }} class="img-fluid mb-3" alt="" />
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
                        <a onClick={() => nevigateDetail(id)} href="javascript:;" class="btn btn-sm btn-outline-primary"><i class="bi bi-pencil-fill"></i> Details</a>
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