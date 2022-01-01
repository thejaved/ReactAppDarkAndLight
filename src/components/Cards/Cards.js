import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './Cards.css';
const Cards = ({featuredImage, title, PageUrl}) => {
    return (
        <NavLink to={PageUrl}>
            <div className='Cards'>
                <div className="top_container">
                    <img src={featuredImage} alt={""} />
                    <span></span>
                </div>
                <div className="bottom_container">
                    <h1>{title}</h1>
                </div>
            </div>
        </NavLink>
    )
}
export default Cards;
