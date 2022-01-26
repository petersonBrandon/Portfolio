import React from 'react';
import { useSelector } from 'react-redux';
import Console from '../console_components/Console';

const Home = () => {
    const activeWindow = useSelector(state => state.activeWindow);

    return (
        <div className={`window home ${ activeWindow[0] ? 'active' : 'inactive' }`}>
            <div className='typingContainer'>
                <div>
                    <h1>Brandon Peterson</h1>
                </div>
                <Console />
            </div>
        </div>
    );
};

export default Home;
