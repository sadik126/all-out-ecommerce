import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';

const Details = () => {

    const { serviceId } = useParams();
    return (
        <div>
            <Header></Header>
            this is details of {serviceId}
        </div>
    );
};

export default Details;