import React, { useContext, useEffect, useState } from 'react';
import { addToDb, getproduct } from '../../utilities/fakedb';
import Productdata from '../data/Productdata';
import Header from '../Header/Header';
import './Shop.css';
import '../Cart/Cart.css';
import useProducts from '../../hooks/useProducts';
import { ClipLoader, BarLoader } from 'react-spinners';
import { themeContext } from '../../Context';

const Shop = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 1000)
    // }, [])


    // const [products, setProducts] = useState([])
    // const [products] = useProducts();
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState([]);
    const [pagecount, setPagecount] = useState(0)
    const [page, setPage] = useState(0)
    const [datainpage, setDatainpage] = useState(10)

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`https://allout-server.vercel.appproducts?page=${page}&size=${datainpage}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(true)
                setSearch(data)
            })
    }, [page, datainpage])
    // console.log(search)



    useEffect(() => {
        fetch('https://allout-server.vercel.appproductcount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10)
                setPagecount(pages)
            })
    }, [])

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


    // useEffect(() => {
    //     fetch('https://allout-server.vercel.appproducts')
    //         .then(res => res.json())
    //         .then(data => {

    //             setSearch(data)




    //         })

    //     // setLoading(true)

    // }, [])


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
            const cartproduct = products.find(product => product._id === id)

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
        addToDb(product._id)



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
                loading ?
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

                                            search.map(product => <Productdata key={product._id} product={product} addtocart={addtocart}></Productdata>)



                                        }

                                        {/* <div>
                                        {
                                            [...Array(pagecount).keys()].map(number => <button>{number + 1}</button>)
                                        }
                                    </div> */}



                                        <nav aria-label="..." className='w-100'>
                                            <ul class="pagination justify-content-center">
                                                {/* <li class="page-item disabled">
                                                <a class="page-link" style={{ background: darkMode ? "#2a2b36" : "" }}>Previous</a>
                                            </li> */}
                                                {/* <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item active" aria-current="page">
                                                <a class="page-link" href="#">2</a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li> */}
                                                {
                                                    [...Array(pagecount).keys()].map(number => <li class="page-item"><button className={page === number ? "btn btn-primary active mx-md-2" : "btn btn-primary mx-md-2"} style={{ background: darkMode && page !== number ? "#1b2430" : "", color: darkMode ? 'white' : '' }} onClick={() => setPage(number)}>{number + 1}</button></li>)
                                                }
                                                {/* <li class="page-item">
                                                <a class="page-link" style={{ background: darkMode ? "#2a2b36" : "" }} href="#">Next</a>
                                            </li> */}



                                                <div class="">
                                                    <select onChange={e => setDatainpage(e.target.value)} class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                        <option selected>Load your product data</option>
                                                        <option value="5">5</option>
                                                        <option value="10" selected>10</option>
                                                        <option value="15">15</option>
                                                    </select>
                                                    {/* <label for="floatingSelect">Select your data</label> */}
                                                </div>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    :

                    // <BarLoader
                    //     color={'#367bd6'}
                    //     loading={loading}
                    //     cssOverride={override}
                    //     size={150}
                    //     aria-label="Loading Spinner"
                    //     data-testid="loader"
                    // />



                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>


            }


            <div className="cart">


                <div class="switcher-body">
                    {/* <button class="btn btn-primary btn-switcher shadow-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-paint-bucket me-0"></i></button> */}
                    <div style={{ background: darkMode ? "#2a2b36" : "" }} class="offcanvas offcanvas-end shadow border-start-0 p-1" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling">
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