import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { deleteShoppingCart } from '../../utilities/fakedb';
import Loading from '../Loading/Loading';

const Cardpayment = ({ orders }) => {
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transationId, setTransationid] = useState("");
    const [isLoading, setIsLoading] = useState(true)
    const [cardError, setcardError] = useState('')
    const stripe = useStripe()
    const elements = useElements();
    const { total, firstname, products, email, _id
    } = orders

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:6060/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ total }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                    setIsLoading(false)
                }
                // setClientSecret(data.clientSecret)

            });

    }, [total]);

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setcardError(error.message)
        } else {
            setcardError('')
        }



        setSuccess('')
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: firstname,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setcardError(confirmError.message)
            return
        }

        if (paymentIntent.status === 'succeeded') {


            const payment = {
                total,
                transationId: paymentIntent.id,
                email,
                bookingId: _id

            }

            fetch('http://localhost:6060/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })

                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data)
                        deleteShoppingCart()

                        setSuccess('Congrates.Your payment is complete')
                        setTransationid(paymentIntent.id)
                    }
                })
        }

        setProcessing(false)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#50d57f',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success mt-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-600">{cardError}</p>
            {
                success && <div>
                    <p className="text-green-600">{success}</p>
                    <p>Your transationId: <span className='font-extrabold'>{transationId}</span> </p>
                </div>
            }


        </div>
    );
};

export default Cardpayment;