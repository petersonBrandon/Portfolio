import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { MdDone } from 'react-icons/md'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import LogoCard from './LogoCard';


import gitHubLogo from '../../images/GitHub_logo.png';
import linkedInLogo from '../../images/linkedin_logo.png';
import fbLogo from '../../images/facebook_logo.png';

const Contact = () => {
    const activeWindow = useSelector(state => state.activeWindow);
    const email = "brandonacfuntech@gmail.com";
    const [isCopied, setCopied] = useState(false);
    const textAreaRef = useRef(null);

    const copy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 5000);
    }

    return (
        <div className={`window contact ${ activeWindow[4] ? 'active' : 'inactive' }`}>
            <h1 className='title'>Contact Info</h1>
            <div className='contactListContainer'>
                <LogoCard title="Facebook" pageReference="https://www.facebook.com/brandon.peterson.1694059" imgSource={ fbLogo }/>
                <LogoCard title="LinkedIn" pageReference="https://www.linkedin.com/in/brandon-peterson-194572198/" imgSource={ linkedInLogo }/>
                <LogoCard title="GitHub" pageReference="https://github.com/petersonBrandon" imgSource={ gitHubLogo }/>
            </div>
            <div className='emailContainer'>
                <p ref={textAreaRef}>{email}</p>
                <CopyToClipboard text={email} onCopy={copy}>
                    <button>{isCopied ? <MdDone /> : 'Copy'}</button>
                </CopyToClipboard>
            </div>
        </div>
    );
};

export default Contact;
