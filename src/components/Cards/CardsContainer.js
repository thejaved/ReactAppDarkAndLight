import React from 'react';
import Cards from './Cards';
import './Cards.css';
import CardsData from './Cdata';
const CardsContainer = () => {
    return (
        <div className='CardsContainer'>
            {
                CardsData.map((items)=>{
                    return(
                        <Cards featuredImage={items.featuredImage} title={items.title} key={items.key} PageUrl={items.pageUrl}/>
                    )
                })
            }
        </div>
    )
}
export default CardsContainer;
