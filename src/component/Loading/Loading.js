import React from 'react';
import Header from '../Header/Header';
import './Loading.css';

const Loading = () => {
    return (
        <div>
            <Header></Header>
            {/* <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span class="visually-hidden">Loading...</span>
            </button> */}
            <button class="btn btn-primary button" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    );
};

export default Loading;