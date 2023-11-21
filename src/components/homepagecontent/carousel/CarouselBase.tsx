import React, {useEffect, useState} from 'react';
import './CarouselBase.scoped.scss';


export default function CarouselBase({carouselType, CarouselContent, focusPage, setFocusPage}) {
  const Thumbs = () => {
    const newArr = [];
    for(let i = 0; i <= carouselType.pageCount; i++) {
      newArr.push(
        <div key={i} className={focusPage === i ? 'focus' : ''} onClick={()=>{setFocusPage(i);}}></div>
      )
    }
    return newArr;
  }

  return (
    <div className='carousel'>
      <div className='carouselContent'>
        <h2 className='carouselTitle'>{carouselType.title}</h2>
        <div className='carouselContainer'>
          <div className="carouselItem">
            {CarouselContent}
          </div>
          <div className="carouselThumbs">
            {
              Thumbs()
            }
          </div>
          <div className="arrowLeft" onClick={function(){
            if (focusPage === 0) {
              setFocusPage(carouselType.pageCount-1)
            } else {
              setFocusPage(focusPage-1);
            }
          }}>
            <div></div>
          </div>
          <div className="arrowRight" onClick={function(){
            if (focusPage === carouselType.pageCount) {
              setFocusPage(0)
            } else {
              setFocusPage(focusPage+1);
            }
          }}>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}


