import React, { useEffect, useState } from 'react';
import { getproduct } from '../../utilities/fakedb';

const useCart = (products) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCart = getproduct();
        const savedcart = [];
        for (const id in storedCart) {
            const addedproduct = products.find(product => product._id === id);
            if (addedproduct) {
                const quantity = storedCart[id];
                addedproduct.quantity = quantity;
                savedcart.push(addedproduct);
            }
        }
        setCart(savedcart)
    }, [cart])
    return [cart, setCart]
};

export default useCart;