import React from 'react';
const Icons = ({name,onClick}) => {
    return (
        <i className={name} onClick={onClick}></i>
    )
}
export default Icons;
