import React from 'react';
import './monarchProject.css'

const MonarchProject = () => {
    return (
        <div className='monarch-container'>
            <div className=''style={{display:"flex", flexDirection:"column", marginRight:"85px"}}>
                <h1 className='monarch-title'> Monarch HQ Project </h1>
                <p className='monarch-paragraph'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. </p>
            </div>

            <div>
              <p className='client-date'>
                Date: 12 April 2018 <br/>
                Client: Monarch Group <br/>
                Project Type: Building Renovation
              </p>
            </div>
            
        </div>
    );
};

export default MonarchProject;