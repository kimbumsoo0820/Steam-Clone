import React, {useEffect, useState} from 'react';
import './SpecialDiscountCarouselCss.scoped.scss';


export default function SpecialDiscountCarousel({title, name}) {

  useEffect(function(){
    console.log(title);
  },[])
  return (
    <div className='carousel'>
      <div className='carouselContent'>
        <h2 className='carouselTitle'>{title}</h2>
        <div className='carouselContainer'>
          <div className="carouselItem"></div>
          <div className="carouselThumbs"></div>
          <div className="arrowLeft"><div></div></div>
          <div className="arrowRight"><div></div></div>
        </div>
      </div>
    </div>
  )
}
