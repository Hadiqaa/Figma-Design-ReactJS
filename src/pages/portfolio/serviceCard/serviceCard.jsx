import React from 'react';
import Images from '../../../assets/images/images';
import ServiceSnippet from '../../../components/serviceSnippet/serviceSnippet';
import './serviceCard.css';

const ServiceCard = () => {
    return (
   <div className='ServiceCardMain'>
      <div className='ServiceCardMini'>
       <div className='ServiceRows'>
          <ServiceSnippet imageSrc={Images.image2}/>
          <ServiceSnippet imageSrc={Images.image3}/>
          <ServiceSnippet imageSrc={Images.image4}/>
       </div>

       <div className='ServiceRows'>
          <ServiceSnippet imageSrc={Images.image5}/>
          <ServiceSnippet imageSrc={Images.image6}/>
          <ServiceSnippet imageSrc={Images.image7}/>
       </div>


       <div className='ServiceRows'>
          <ServiceSnippet imageSrc={Images.image8}/>
          <ServiceSnippet imageSrc={Images.image9}/>
          <ServiceSnippet imageSrc={Images.image12}/>
       </div>
    </div>
   </div>
    );
};

export default ServiceCard;