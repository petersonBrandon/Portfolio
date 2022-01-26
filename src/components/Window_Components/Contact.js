import React from 'react';
import { useSelector } from 'react-redux';

import LogoCard from '../LogoCard';


import gitHubLogo from '../../images/GitHub_logo.png';
import linkedInLogo from '../../images/linkedin_logo.png';
import fbLogo from '../../images/facebook_logo.png';

const Contact = () => {
    const activeWindow = useSelector(state => state.activeWindow);
    const email = "brandonacfuntech@gmail.com";

    const copy = async () => {
        await navigator.clipboard.writeText(email);
        alert('Copied! :)');
    }

    return (
        <div className={`window contact ${ activeWindow[4] ? 'active' : 'inactive' }`}>
            <h1 className='title'>Contact Info</h1>
            <div className='contactListContainer'>
                <LogoCard title="GitHub" pageReference="https://github.com/petersonBrandon" imgSource={ gitHubLogo }/>
                <LogoCard title="LinkedIn" pageReference="https://www.linkedin.com/in/brandon-peterson-194572198/" imgSource={ linkedInLogo }/>
                <LogoCard title="Facebook" pageReference="https://www.facebook.com/brandon.peterson.1694059" imgSource={ fbLogo }/>
            </div>
            <div className='emailContainer'>
                <p>{email}</p>
                <button onClick={copy}>Copy</button>
            </div>
        </div>
    );
};

export default Contact;
