import React from 'react';
import './contactUs.css';
import Button from '../../../components/button/button';
const ContactUs = () => {
    return (
        <div className='contact-us'>
            <div className='get-in-touch'>
              <p className='build-something'>Let’s Build Something Together</p>
              <p className='build-something-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. </p>
               <Button value="GET IN TOUCH" style={{border: "4px solid #FFB400", color:"#FFB400", width:"310", height:"65px", fontSize:"15px"}}/>
            </div>
            
               <div className='QAS'>
                  
               </div>
        </div>
    );
};

export default ContactUs;