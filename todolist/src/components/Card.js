import React from 'react';

const Card = ({ texto, ...props }) => {
    return (
        <div className='card-content'
            draggable
            {...props}
        >
            <div className='card-status'/>
            <div className='card-text'>{texto}</div>
        </div>
    )
}

export default Card;