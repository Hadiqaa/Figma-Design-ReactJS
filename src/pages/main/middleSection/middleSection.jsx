import React from 'react';
import Button from '../../../components/button/button';
import { Col, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import './middleSection.css'


const MiddleSection = () => {
    return (
        <div className='middle-main'>
           <div className='middle-left-wrap'>
           </div>

            <div className='middle-right-wrap'>
                    <div className='middle-heading'>
                        <p style={{paddingBottom:"35px",alignSelf: "flex-start"}}>No Project Too Big or Too Small</p>
                    </div>
                    <div className="right-wrap3-middle" >
                    <Row>
                        <Col style={{marginRight:"80px"}}>
                            <Row  style={{marginBottom:"30px", }} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. <br/>Scelerisque lorem posuere iaculis nunc amet phasellus.
                            </Row>
                            <Row>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam.  
                            </Row>
                        </Col>
                        <Col>
                            <Row style={{marginBottom:"80px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus. 
                            </Row>
                            <Row>
                            <Button value="LEARN MORE " />
                            </Row>
                        </Col>
                    </Row>
                 </div>
                 <div className='middle-footer'>

                    <div className="yellow-side">
                        <p className='yellow-side-heading' >12</p> 
                        <p className='yellow-side-text' >YEARS ESTABLISHED</p>
                    </div>

                    <div className="black-side">
                        <p className='black-side-heading'>250</p> 
                        <p className='black-side-text'>PROJECTS COMPLETED</p>
                    </div>

                </div>
                 </div>

                

           
</div>
    );
};

export default MiddleSection ;

