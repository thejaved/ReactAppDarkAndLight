import React from 'react'
import Icons from './Icons';
import './Iconbtn.css';
const Iconbtn = ({name,onClick}) => {
    return (
        <div className="Iconbtn" onClick={onClick}>
            <Icons name={name}/>
        </div>
    )
}

export default Iconbtn;
