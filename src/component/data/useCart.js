import React, { useEffect, useState } from 'react';
import { getproduct } from '../../utilities/fakedb';
import Loading from '../Loading/Loading';

const useCart = (products) => {
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const storedCart = getproduct();
        const savedcart = [];
        for (const id in storedCart) {
            const addedproduct = products.find(product => product._id === id);
            if (addedproduct) {
                const quantity = storedCart[id];
                addedproduct.quantity = quantity;
                savedcart.push(addedproduct);
                setLoading(true)
            }
        }
        if (loading) {
            return <Loading></Loading>
        }


        setCart(savedcart)
        setLoading(false)
    }, [cart])
    return [cart, setCart]
};

export default useCart;