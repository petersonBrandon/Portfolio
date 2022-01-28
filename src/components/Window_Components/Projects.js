import React from 'react';
import { useSelector } from 'react-redux';
import ProjectCard from './ProjectCard';

import calcImg from '../../images/calculator.png';
import portfolioImg from '../../images/portfolio.png';
import dndImg from '../../images/dnd.png';

const Projects = () => {
    const activeWindow = useSelector(state => state.activeWindow);

    return (
        <div className={`window projects ${ activeWindow[3] ? 'active' : 'inactive' }`}>
            <h1 className='title'>Projects</h1>
            <div className='projectList'>
                <ProjectCard title="Calculator on React" imageSrc={calcImg} url="https://github.com/petersonBrandon/React-Calculator"/>
                <ProjectCard title="Online D&D Character Sheet" imageSrc={dndImg} url="https://github.com/tygedavis/dragonsInfinity"/>
                <ProjectCard title="This Portfolio" imageSrc={portfolioImg} url="https://github.com/petersonBrandon/Portfolio"/>
            </div>
        </div>
    );
};

export default Projects;
