import React from 'react';

import '../styles/SkillCard.css';

const SkillCard = (props) => {
    return (
        <div className='skillCard'>
            <a href={props.pageReference} target="_blank" rel="noopener noreferrer">
                <img src={ props.imgSource } alt={ props.title } />
            </a>
        </div>
    );
};

export default SkillCard;
