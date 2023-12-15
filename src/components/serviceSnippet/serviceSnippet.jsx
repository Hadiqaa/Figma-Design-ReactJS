import React from 'react';
import './serviceSnippet.css';
import Button from '../button/button';

const ServiceSnippet = ({imageSrc}) => {
    return (
        <div className='ServiceSnippet'>
           <div className='topwrap'>
            <img className='serviceimage'src={imageSrc} alt='image'/>
           </div>

           <div className='bottomwrap'>
             <p className='ServiceTitle'>Service Title</p>
             <p className='ServiceDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. </p>
             <Button value="LEARN MORE" style={{border: "1px solid #666", width: "138px", height: "28px", fontSize:"11px", color:"#666666"}} />
             
           </div>
        </div>
    );
};

export default ServiceSnippet;