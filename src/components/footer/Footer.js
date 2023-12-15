import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'
import Button from '../button/button'
import icons from '../../assets/icons/icons'
const Footer = () => {
    return (
        <React.Fragment>
             <div className="footer-container">

                    <div className='footer-left-container'>
                              <div className='footer-heading-container'>
                                  <p className='footer-heading'>Contact Us</p>
                              </div>

                              <div className='footer-form'>
                                   <div className='footerInputContainer'>  
                                        <input placeholder='Name' className='footer-input-left' /> 
                                        <input placeholder='Email' className='footer-input-right' />
                                   </div>
                                   <textarea placeholder='Message' className='footer-text-area' />
                              </div>


                              <div className='button-container'>
                                    <Button value="SEND MESSAGE"  style={{color:"#ffffff",borderWidth:"5px", borderColor:"#ffffff"}}></Button>
                              </div>
                    </div>


                    <div className='footer-right-container'>
                              <div className='top-section'>

                                        <span style={{width:"26px", height:"26px", marginRight:"71px"}}> <img src={icons.facebook} alt="" />  </span>
                                        <span style={{width:"26px", height:"26px",marginRight:"71px"}}> <img src={icons.twitter} alt="" /> </span>
                                        <span style={{width:"26px", height:"26px"}}> <img src={icons.linkedin} alt="" /> </span>
                                       
                              </div>

                              <div className='bottom-section'>
                                   <div style={{marginTop:"70px"}}>
                                        <p className='informarion'>
                                        <span> <img src={icons.pin} alt="" className='pinicon' /></span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>

                                        <p className='informarion'>
                                        <span><img src={icons.phone} alt="" className='phoneicon'/></span> 
                                        +00 123 456 78
                                        </p>

                                        <p className='informarion'>
                                        <span> <img src={icons.mail} alt="" className='mailicon'/></span>
                                        constractioninc@gmail.com
                                        </p>
                                   </div>
                              </div>
                    </div>
             </div>
        </React.Fragment>
    );
};

export default Footer;