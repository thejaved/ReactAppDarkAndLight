import React from 'react';
import Icons from '../Icons/Icons';
import './Ourinput.css';
const Ourinput = ({name,type,placeholder}) => {
    return (
        <div className='input_icon_content'>
            <Icons name={name}/>
            <input type={type} placeholder={placeholder}/>
        </div>
    )
}

export default Ourinput;
