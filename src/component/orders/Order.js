import React from 'react';
import { Link } from 'react-router-dom';

const Order = (props) => {
    const {
        _id, paid, total, firstname, lastname, email, phone, address, products,
        transactionId } = props.orders
    return (

        <tr>
            <th scope="row"> <label htmlFor=""><button onClick={() => props.deleteOrder(_id)} className='btn btn-outline-danger'>X</button></label></th>
            <td>{products.map(p => <p>{p.name} ({p.quantity})</p>)}</td>


            <td>{total} BDT</td>
            <td>{firstname + lastname}</td>
            <td>{email}</td>
            <td>{paid ? <span className='badge rounded-pill alert-success'>paid</span> : <span className='badge rounded-pill alert-warning'>pending</span>}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{!paid && <Link className='btn btn-primary' to={`/payment/${_id}`}>Make payment</Link>}</td>
            <td>{
                transactionId}</td>
        </tr>



    );
};

export default Order;