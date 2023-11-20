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
    pageCount : CategoryData.length/4 - 1
  })
  let [focusePage, setFocusPage] = useState<number>(0);
   
  const CategoryCarouselContainer = () => {
    let startIndx, endIndex;
    let [currentIndex, setCurrentIndex] = useState(0);

    if (focusePage === 0) {
      startIndx = currentIndex;
      endIndex = currentIndex+categoryCarouselType.pageCount;
    } 
    else if(focusePage === 1) {
      startIndx = currentIndex+categoryCarouselType.pageCount;
      endIndex = currentIndex+(categoryCarouselType.pageCount*2);
    }
    else if(focusePage === 2) {
      startIndx = currentIndex+(categoryCarouselType.pageCount*2);
      endIndex = currentIndex+(categoryCarouselType.pageCount*3);
    }
    else if(focusePage === 3) {
      startIndx = currentIndex+(categoryCarouselType.pageCount*3);
      endIndex = currentIndex+(categoryCarouselType.pageCount*4);
    }
    else if(focusePage === 4) {
      startIndx = currentIndex+(categoryCarouselType.pageCount*4);
      endIndex = currentIndex+(categoryCarouselType.pageCount*5);
    }
    return (
      <div className="categoryCarouselContainer">
        {
          CategoryData.slice(startIndx, endIndex).map(function(data, index){
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