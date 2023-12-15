import React from 'react';
import ConstructionProjects from './constructionProjects/constructionProjects';
import Footer from '../../components/footer/Footer';
import './Portfolio.css';
import ServiceCard from './serviceCard/serviceCard';

const Portfolio = () => {
    return (
        <React.Fragment >
            <ConstructionProjects />
             
             <ServiceCard />

             <div className='getBuilding'>
                 <p className='getBuildingQuote'>Have a Project in Mind? <br/> Let's Get Building!</p>
             </div>
            <Footer />
        </React.Fragment>
    );
};

export default Portfolio;