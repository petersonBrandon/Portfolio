import React from 'react';
import { useDispatch } from 'react-redux';

import { switchActivePage } from '../redux/redux-actions/windowActions';

const NavBtn = (props) => {
    const className = "navBtn";
    const dispatch = useDispatch();

    const handleClick = (num) => {
        dispatch(switchActivePage(num));
        props.checked();
    } 

    return (
        <div>
            <button className={className} onClick={() => handleClick(0)}>Home</button>
            <button className={className} onClick={() => handleClick(1)}>About Me</button>
            <button className={className} onClick={() => handleClick(2)}>Skills</button>
            <button className={className} onClick={() => handleClick(3)}>Projects</button>
            <button className={className} onClick={() => handleClick(4)}>Contact Info</button>
        </div>
    );
};

export default NavBtn;
