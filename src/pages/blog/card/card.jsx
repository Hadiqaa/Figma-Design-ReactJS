import React from 'react';
import './card.css';

const ReusableCard = ({ imageSrc, title, date, description }) => {
    return (
        <div className='BlogCard'>
            <div className='topWrap'>
                <img className='cardImage' src={imageSrc} alt={title} />
            </div>
            <div className='blogDescription'>
                <p className='cardTitle'>{title}</p>
                <p className='dateAdded'>{date}</p>
                <p className='cardDescription'>{description}</p>
            </div>
        </div>
    );
};

export default ReusableCard;
