import React, {useEffect, useState} from 'react';
import './CarouselBase.scoped.scss';


export default function CarouselBase({title, CarouselContent}) {

  return (
    <div className='carousel'>
      <div className='carouselContent'>
        <h2 className='carouselTitle'>{title}</h2>
        <div className='carouselContainer'>
          <div className="carouselItem">
            {CarouselContent}
          </div>
          <div className="carouselThumbs"></div>
          <div className="arrowLeft"><div></div></div>
          <div className="arrowRight"><div></div></div>
        </div>
      </div>
    </div>
  )
}
