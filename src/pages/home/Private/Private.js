import React, { Fragment, useContext } from 'react';
import { UserContext } from '../../../context/userContext';
import { Outlet, useLocation, Navigate } from "react-router-dom";

const Private = () => {
    const {currentUser} = useContext(UserContext);
    console.log(currentUser);

    if(!currentUser) {
        return <Navigate to="/" />
    }
    return (
        <div className='container'>
            <Outlet />
        </div>
    )
}

export default Private;