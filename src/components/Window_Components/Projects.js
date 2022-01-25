import React from 'react';
import { useSelector } from 'react-redux';

const Projects = () => {
    const activeWindow = useSelector(state => state.activeWindow);

    return (
        <div className={`window projects ${ activeWindow[3] ? 'active' : 'inactive' }`}>
            <h1 className='title'>Projects</h1>
        </div>
    );
};

export default Projects;
