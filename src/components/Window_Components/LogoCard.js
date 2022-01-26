import React from 'react';

import '../../styles/LogoCard.css';

const LogoCard = (props) => {
    return (
        <div className='logoCard'>
            <a href={props.pageReference} target="_blank" rel="noopener noreferrer">
                <img src={ props.imgSource } alt={ props.title } />
            </a>
        </div>
    );
};

export default LogoCard;
