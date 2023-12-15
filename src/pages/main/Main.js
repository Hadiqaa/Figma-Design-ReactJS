import React from 'react';
import icons from '../../assets/icons/icons';
import HeroSection from './heroSection/heroSection.jsx';
import Button from '../../components/button/button';
import Footer from '../../components/footer/Footer';
import MiddleSection from './middleSection/middleSection';
import ServiceSection from '../../components/service/servicesection'
import images from '../../assets/images/images';
import VideoCallOut from './videocallout/videocallout';
import ContactUs from './contactUs/contactUs';
import Testimonials from './testimonials/testimonials';
import './Main.css';

const Main = () => {

    const projects = [
        {
          image: images.image4,
          title: 'Project Title 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
        },
        {
          image: images.image5,
          title: 'Project Title 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
        },
        {
          image: images.image8,
          title: 'Project Title 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et euismod bibendum adipiscing et orci, fermentum. Cras tristique viverra gravida et sit egestas.'
        },
      ];
    

    return (
        <React.Fragment >
            <HeroSection />

                <div className='callout'>
                    <h1 className='quote-heading'>Get a Quote For Your Project</h1>  <Button value="FREE QUOTE" style={{borderWidth:"5px", borderColor:"#ffb400", color:"#ffb400", height:"65px"}}/>
                </div>
            <MiddleSection />
            <ServiceSection heading="Latest Projects" projects={projects} />
            <VideoCallOut />
            <ContactUs/>
            <Testimonials/>
                  <div className='companies-container'>
                      <div className='companies'>
                        <img src={icons.clients} alt='clients' />
                      </div>
                  </div>
            <Footer />
        </React.Fragment>
    );
};

export default Main;
