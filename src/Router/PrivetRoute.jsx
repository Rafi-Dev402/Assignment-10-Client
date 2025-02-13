import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext)

    if (loding) {
        return <>
            <div className='min-h-[calc(100vh-450px)] flex items-center justify-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        </>
    }

    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }

    return (
        children
    );
};

export default PrivetRoute;