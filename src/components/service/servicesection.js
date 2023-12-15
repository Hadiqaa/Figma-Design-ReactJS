import React from 'react';
import { Container } from 'react-bootstrap';
import Button from '../../components/button/button';
import './servicesection.css';

const ServiceSection = ({ heading, projects }) => {
  return (
    <Container className='react-container'>
      <h1 className='servicesection-title'>{heading}</h1>
      <div className='main-container'>
        {projects.map((project, index) => (
          <div key={index} className='image-container'>
            <img src={project.image} className='image' alt={`Project ${index + 1}`} />
            <div className='mini-container'>
              <div className='mini-mini-container'>
              <h3 className='project-title'>{project.title}</h3>
              <p className='project-description'>{project.description}</p>
              <Button value="VIEW PROJECT" style={{ borderColor:"#666666",width: "150px", height: "30px", fontSize:"13px", borderWidth:"1px", fontWeight:"700", color:"#666666"}} />
               </div>
            </div>
          </div>
        ))}
      </div>
      <Button value='View All'  />
    </Container>
  );
};

export default ServiceSection;
