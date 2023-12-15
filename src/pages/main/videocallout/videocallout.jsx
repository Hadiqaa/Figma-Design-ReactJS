import React from 'react';
import Button from '../../../components/button/button';
import './videocallout.css';

const VideoCallOut = () => {
    return (
        <div className='videocallout-main-container'>

           <div className='about-us'>
             <p className='about-us-heading'>We've Been Building For Over 10 Years</p>
             <p className='about-us-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.</p>
             <Button value="ABOUT US" style={{width: "210px", height: "54px",border: "4px solid #FFB400", color:"#FFB400", margin:"37px"}}  />
            </div>

            <div className='video-container'>
                 <div style={{height: "710px"}}>
                    <iframe
                        title="Embedded Video"
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Ju-FTaufnBQ?si=xTeDc1sGEznv6Clf"
                        allowFullScreen
                    ></iframe>
                 </div>



                   
                  <div style={{display:"flex"}}>
                     <div className='callquote-container'>
                        <p className='callforquote'>Call for a Quote</p>
                        <p className='phone-no'>(346) 234-6973</p>
                     </div>
                     <div className='estimateform'>
                        <Button value="ONLINE ESTIMATE FORM" style={{width: "250px", height: "58px", border: "4px solid #1F1F1F"}}/>
                     </div>
                  </div>

            </div>

        </div>
    );
};

export default VideoCallOut;