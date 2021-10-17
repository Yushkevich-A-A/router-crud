import React, { useState } from 'react';
import { Redirect } from 'react-router';
import './ButtonCancel.css';

function ButtonCancel(props) {
    const [ redirect, setRedirect ] = useState(false);
    const handleCancel = () => {
        setRedirect(!redirect)
    }
    return (
        <>
            <div className="new-post-cancel" onClick={handleCancel}></div>
            {redirect && <Redirect to='/' />}
        </>
    )
}

export default ButtonCancel;

