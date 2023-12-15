import React from 'react';
import { Container } from 'react-bootstrap';
import images from '../../assets/images/images';
import ServiceSection from '../../components/service/servicesection';
import './Service.css'
const Service = () => {
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
    
  
    return <ServiceSection heading="Latest Projects" projects={projects} />;
  };
  
  export default Service;