import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const activeWindow = useSelector(state => state.activeWindow);

    return (
        <div className={`window home ${ activeWindow[0] ? 'active' : 'inactive' }`}>
            <div className='typingContainer'>
                <div className='credContainer'>
                    <div><p className='rootStart0'>root_user:~/ $</p></div>
                    <div><p className='username'>brandon@peterson</p></div>
                </div>
                <div className='credContainer'>
                    <div><p className='rootStart1'>root_pass:~/ $</p></div>
                    <div><p className='password'>**********</p></div>
                </div>
                <div>
                    <p className='welcome'>Welcome</p>
                </div>
                <div>
                    <h1>Brandon Peterson</h1>
                </div>
                {/* TODO: make the console actually work */}
                <div><p className='root'>root:~/ $ </p></div>
            </div>
        </div>
    );
};

export default Home;
