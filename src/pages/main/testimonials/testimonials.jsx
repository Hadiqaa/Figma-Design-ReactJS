import React from 'react';
import "./testimonials.css"
import icons from '../../../assets/icons/icons';
const Testimonials = () => {
    return (
        <div className='client-testimonials'>
            <p className='client-testimonials-title'>Client Testimonials</p>

            <div className='inner-container'>
                <div className='reviews'>
                    <span><img src={icons.starframe} alt='stars'/></span>
                    <p className='lorem-ispum'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.”</p>
                    <p className='john-smith'>John Smith</p>

                </div>

                <div className='reviews'>
                   <span><img src={icons.starframe} alt='stars'/></span>
                   <p className='lorem-ispum'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.”</p>
                   <p className='john-smith'>John Smith</p>
                    
                </div>

                <div className='reviews'>
                  <span><img src={icons.starframe} alt='stars'/></span>
                  <p className='lorem-ispum'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.”</p>
                  <p className='john-smith'>John Smith</p>
                    
                </div>

            </div>

        </div>
    );
};

export default Testimonials;