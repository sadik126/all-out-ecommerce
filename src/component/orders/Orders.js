import React from 'react';
import useCart from '../data/useCart';
import useProducts from '../data/useProducts';
import Header from '../Header/Header';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <Header></Header>
            <h1>this is orders{products.length}</h1>
            <p> cart has {cart.length}</p>

        </div>
    );
};

export default Orders;