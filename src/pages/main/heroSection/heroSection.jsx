import React from 'react';
import './heroSection.css';
import Button from '../../../components/button/button';
import Snippets from '../../../components/snippets/snippets';
import icons from '../../../assets/icons/icons';

const HeroSection = () => {
    
    return (
        <React.Fragment>
            <div className='hero-main'>
                <div className='hero-left-wrapper'>
                    <h1 className='hero-title'>Construction</h1> <br />
                    <p className='hero-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.</p>
                    <Button style={{color:"#ffffff",borderColor:"#FFB400",backgroundColor:"#FFB400"}} value="VIEW OUR WORK"/>
                </div>
                <div className='hero-right-wrapper'>
                    <h1 className='hero-title-right-wrapper'>Our Services</h1>
                    <Snippets icons={icons.icon1} heading='Building Instructions' text='Lorem ipsum dolor sit consectetur adipiscing elit.'/>
                    <Snippets icons={icons.icon2} heading='Foundation Work' text='Lorem ipsum dolor sit consectetur adipiscing elit.'/>
                    <Snippets icons={icons.icon3} heading='Site Management' text='Lorem ipsum dolor sit consectetur adipiscing elit.'/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HeroSection;
