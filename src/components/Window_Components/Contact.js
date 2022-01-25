import React from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {
    const activeWindow = useSelector(state => state.activeWindow);

    return (
        <div className={`window contact ${ activeWindow[4] ? 'active' : 'inactive' }`}>
            <h1 className='title'>Contact Info</h1>
        </div>
    );
};

export default Contact;
