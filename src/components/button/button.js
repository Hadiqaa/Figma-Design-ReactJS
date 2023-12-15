import React from 'react';
import './button.css';

const Button = ({value, style, onclick})  => {

  // const buttonStyle = {
  //   backgroundColor: bgColor,
  //   borderColor: borderColor,
  //   borderWidth: borderWidth,
  //   color : color,
  // };
  return (
     
      <button  className='btn' style={style} onClick={onclick}>
        {value}
        </button>
              
  );
}

export default Button;