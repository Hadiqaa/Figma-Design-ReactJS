    import React from 'react';
    import './snippets.css'
    import icons from '../../assets/icons/icons';
    const Snippets = ({icons, heading, headingColor}) => {
        return (
        <React.Fragment>
            <div className='snippet-main-wrap'>
                
                    <div className='snippet-icon-wrap'>
                        <img src={icons} className='icon' alt='icon1'></img>  
                    </div>

                    <div className='snippet-right-wrap'>
                        <p className='snippet-title' style={{ color: headingColor }} > {heading} </p> 
                        <p className='snippet-text'>Lorem ipsum dolor sit consectetur adipiscing elit.</p>
                    </div>
            </div>
        </React.Fragment> 
        );
    };

    export default Snippets;