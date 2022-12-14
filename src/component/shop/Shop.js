import React, { useEffect, useState } from 'react';
import { addToDb, getproduct } from '../../utilities/fakedb';
import Productdata from '../data/Productdata';
import Header from '../Header/Header';
import './Shop.css';
import '../Cart/Cart.css';
import useProducts from '../../hooks/useProducts';
import { ClipLoader, BarLoader } from 'react-spinners';

const Shop = () => {


    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])


    // const [products, setProducts] = useState([])
    const [products] = useProducts();
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState([]);
    // console.log(search)



    const Handlesearch = (event) => {
        const Searchtext = event.target.value;
        const match = products.filter(product =>

        // product.name.toLowerCase().includes(Searchtext)

        {
            if (product === null) {
                return product
            }
            else {
                return product.name.toLowerCase().includes(Searchtext)

            }
        }

        )
        setSearch(match)


    }


    useEffect(() => {
        fetch('../../fakeData/products.json')
            .then(res => res.json())
            .then(data => setSearch(data))
    }, [])


    // useEffect(() => {
    //     fetch('../../fakeData/products.json')
    //         .then(res => res.json())
    //         .then(data => setSearch(data))
    // }, [products, cart])




    useEffect(() => {
        const storedCart = getproduct();
        console.log(storedCart)
        const savedcart = [];
        for (const id in storedCart) {
            const cartproduct = products.find(product => product.id === id)

            if (cartproduct) {


                const quantity = storedCart[id];
                cartproduct.quantity = quantity;
                savedcart.push(cartproduct);

            }
        }

        setCart(savedcart);


    }, [cart])


    const addtocart = (product) => {
        const newitems = [...cart, product]
        setCart(newitems);
        addToDb(product.id)



    }

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {


        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;

        shipping = shipping + product.shipping

    }

    let tax = parseFloat((total * 10 / 100).toFixed(2));

    let grandtotal = total + shipping + tax;

    // useEffect(()=>{

    // })


    return (
        <div>
            <Header cart={cart} Handlesearch={Handlesearch} quantity={quantity}></Header>

            {
                loading ? <BarLoader
                    color={'#367bd6'}
                    loading={loading}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                    :
                    <div>
                        <div class="d-flex  search">
                            <input onChange={Handlesearch} class="form-control me-2" type="search" placeholder='Search Your products' aria-label="Search" />
                            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                        </div>
                        <div className="products">
                            <div className='card-body'>
                                <h1 className='text-center'>All products</h1>
                                <div className='product-grid'>
                                    <div className='row row-cols-1 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-3'>

                                        {


                                            // search ? search.map(product => <Productdata key={product.id} product={product} addtocart={addtocart}></Productdata>) : products.map(product => <Productdata key={product.id} product={product} addtocart={addtocart}></Productdata>)

                                            search.map(product => <Productdata key={product.id} product={product} addtocart={addtocart}></Productdata>)



                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
            }


            <div className="cart">


                <div class="switcher-body">
                    {/* <button class="btn btn-primary btn-switcher shadow-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-paint-bucket me-0"></i></button> */}
                    <div class="offcanvas offcanvas-end shadow border-start-0 p-1" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling">
                        <div class="offcanvas-header border-bottom">
                            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Order summary</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>

                        </div>
                        <div class="offcanvas-body">
                            <h6 class="mb-0 text-center">Cart details</h6>
                            <hr />
                            <h6>Total Product : {cart.length} items</h6>
                            <small>Total price: {total} BDT</small>
                            <br />
                            <small>Shipping: {shipping} BDT</small>
                            <br />
                            <small>Tax: {tax} BDT</small>
                            <hr />
                            <h4>Grand Total : {grandtotal}</h4>

                            {/* <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="LightTheme" value="option1" />
                <label class="form-check-label" for="LightTheme">Light</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="DarkTheme" value="option2" />
                <label class="form-check-label" for="DarkTheme">Dark</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="SemiDarkTheme" value="option3" />
                <label class="form-check-label" for="SemiDarkTheme">Semi Dark</label>
            </div>
            <hr />
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="MinimalTheme" value="option3" checked />
                <label class="form-check-label" for="MinimalTheme">Minimal Theme</label>
            </div> */}
                            {/* <hr />
            <h6 class="mb-0">Header Colors</h6> */}
                            <hr />

                            <a href="/cart" className='btn-grad2'>Go to cart</a>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Shop;