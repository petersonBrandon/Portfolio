import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const activeWindow = useSelector(state => state.activeWindow);

    return (
        <div className={`window home ${ activeWindow[0] ? 'active' : 'inactive' }`}>
            <div className='typingContainer'>
                <h1>Brandon Peterson</h1>
            </div>
        </div>
    );
};

export default Home;
