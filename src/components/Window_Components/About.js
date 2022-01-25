import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
    const activeWindow = useSelector(state => state.activeWindow);

    return (
        <div className={`window about ${ activeWindow[1] ? 'active' : 'inactive' }`}>
            <h1 className='title'>About Me</h1>
            <p>
                I am an aspiring software engineer that is a junior currently 
                studying at Brigham Young University-Idaho. I love to program 
                and see a project unfold, and learn new ways to solve problems 
                efficiently. 
            </p>
        </div>
    );
};

export default About;
