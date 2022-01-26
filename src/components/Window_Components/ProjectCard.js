import React from 'react';

import '../../styles/ProjectCard.css';


const ProjectCard = (props) => {
    return (
        <article className='projectCard'>
            <img src={props.imageSrc} alt={props.title} />
            <h1>{props.title}</h1>
            <a href={props.url} target="_blank" rel="noopener noreferrer">View</a>
        </article>
    );
};

export default ProjectCard;
