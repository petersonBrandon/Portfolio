import React from 'react';
import { useDispatch } from 'react-redux';
import '../styles/Navigation.css'

import { switchActivePage } from '../redux/redux-actions/windowActions';

const Navigation = () => {
    const className = "navBtn";
    const dispatch = useDispatch();

    return (
    <nav className='navBar'>
        <button className={className} onClick={() => dispatch(switchActivePage(0))}>Home</button>
        <button className={className} onClick={() => dispatch(switchActivePage(1))}>About Me</button>
        <button className={className} onClick={() => dispatch(switchActivePage(2))}>Skills</button>
        <button className={className} onClick={() => dispatch(switchActivePage(3))}>Projects</button>
        <button className={className} onClick={() => dispatch(switchActivePage(4))}>Contact Info</button>
    </nav>
    );
};

export default Navigation;
