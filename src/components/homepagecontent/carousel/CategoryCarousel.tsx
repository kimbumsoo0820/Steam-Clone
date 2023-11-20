import React, { useState } from "react";
import './CategoryCarousel.scoped.scss';
import CategoryData from './CategoryData.json'

import CarouselBase from "./CarouselBase";


export default function CategoryCarousel() {
  interface CarouselType {
    title : string;
    pageCount : number;
  }
  const [categoryCarouselType, setCategoryCarouselType] = useState<CarouselType>({
    title : '카테고리별로 살펴보기',
    pageCount : 4
  })
  let [focusePage, setFocusPage] = useState<number>(0);

   
  const CategoryCarouselContainer = () => {
    let startIndx, endIndex;
    let [currentIndex, setCurrentIndex] = useState(0);

    if (focusePage === 0) {
      startIndx = currentIndex;
      endIndex = currentIndex+4;
    } 
    else if(focusePage === 1) {
      startIndx = currentIndex+4;
      endIndex = currentIndex+8;
    }
    else if(focusePage === 2) {
      startIndx = currentIndex+8;
      endIndex = currentIndex+12;
    }
    else if(focusePage === 3) {
      startIndx = currentIndex+12;
      endIndex = currentIndex+16;
    }
    else if(focusePage === 4) {
      startIndx = currentIndex+16;
      endIndex = currentIndex+20;
    }
    return (
      <div className="categoryCarouselContainer">
        {
          CategoryData.slice(startIndx, endIndex).map(function(data, index){
            console.log(index);
            return(
              <CategoryCard data={data}></CategoryCard>
            )
          })
        }
      </div>
    )
  }
  const CategoryCard = ({data}) => {
    return(
      <div className="contentArea">
        <img src={data.image}/>
        <div className="gradient" style={{background : data.background}}></div>
        <div className="label">
          <span>{data.name}</span>
        </div>
      </div>
    )
  }

  return(
    <CarouselBase focusPage={focusePage} setFocusPage={setFocusPage} carouselType={categoryCarouselType} CarouselContent={CategoryCarouselContainer()}></CarouselBase>
  )
  
}