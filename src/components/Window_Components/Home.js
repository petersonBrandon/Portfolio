import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const activeWindow = useSelector(state => state.activeWindow);

    return (
        <div className={`window home ${ activeWindow[0] ? 'active' : 'inactive' }`}>
            Brandon Peterson
        </div>
    );
};

export default Home;
