import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';
import { ClipLoader, BarLoader } from 'react-spinners';
import Loading from '../Loading/Loading';

const Requireauth = ({ children }) => {



    const override = {
        display: "flex",

        margin: "150px auto",
        borderColor: "red",
    };

    const auth = getAuth(app);
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>

    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default Requireauth;