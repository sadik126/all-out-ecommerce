import { async } from '@firebase/util';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import Cardpayment from './Cardpayment';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51L4KKASJGWFrRQt8wPF6JUjMkUIrrrRXjeMh0bk7GMs8HvjfPS5VwCFNg53uzPnR1B4QpWHCQJIp6X9i8PSD8HD100Y3GFFVFn');
    const { id } = useParams()
    const [loading, setLoading] = useState(true)

    const { data: orders = [], refetch, isLoading, isFetching } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:6060/orders/${id}`)
            const data = await res.json()
            setLoading(false)
            return data
        }
    })

    if (isLoading || loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Header></Header>
            <div className='p-10'>
                <h3 className="text-3xl">Payment for {orders.firstname}</h3>
                <p className="text-xl">Please pay <strong>${orders.total}</strong> for the amount of  {orders.products.map(single => <span class="badge text-bg-primary text-danger"  >{single.name}(Quantity:{single.quantity})</span>)}</p>
                <div className='w-96 my-12 p-5'>
                    <Elements stripe={stripePromise}>
                        <Cardpayment orders={orders}></Cardpayment>
                    </Elements>

                </div>

            </div>

        </div>
    );
};

export default Payment;