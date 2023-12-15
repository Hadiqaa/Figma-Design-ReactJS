import React from 'react';
import MonarchProject from './monarchProject/monarchProject';
import AboutProject from './aboutProject/aboutProject';
import './Project.css'
import ImageCallOut from './imageCallOut/imageCallOut';
import Footer from '../../components/footer/Footer'
import ServiceSnippet from '../../components/serviceSnippet/serviceSnippet';
import Images from '../../assets/images/images';
import Button from '../../components/button/button';

const Project = () => {
    return (
        <div>
            <MonarchProject />
            <AboutProject />

                <div className='main'>
                    <div className='imageComponent'>
                    </div>
                </div>

            <ImageCallOut />
               
            <div className='RelatedProjects'>
                <div className='RelatedProjectsMini'>
                    <p className='RelatedProjectsTitle'>Related Projects</p>
                            <div className='RelatedProjectsRows'>
                                <ServiceSnippet imageSrc={Images.image2}/>
                                <ServiceSnippet imageSrc={Images.image3}/>
                                <ServiceSnippet imageSrc={Images.image4}/>
                            </div>

                        <Button value="VIEW ALL"     style={{border: "4px solid #1F1F1F",color: "#1F1F1F" , fontSize: "14px"}}/>    
                </div>
            </div>

        <Footer />
        </div>
    );
};

export default Project;