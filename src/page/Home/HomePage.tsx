import React, { useEffect, useLayoutEffect, useState } from 'react';
import './HomePageCss.scss'
import FullScreenBackground from '../../components/homepagecontent/homebackground/FullScreenBackground';
import StoreNavbar from '../../components/homepagecontent/StoreNav/StoreNavbar';
import RecommendationsCarousel from '../../components/homepagecontent/carousel/RecommendationsCarousel';
import CarouselBase from '../../components/homepagecontent/carousel/CarouselBase'
import SpDiscountCarousel from '../../components/homepagecontent/carousel/SpDiscountCarouse';
import CategoryCarousel from '../../components/homepagecontent/carousel/CategoryCarousel';
// import SpDiscountCarousel from '@components/';

export default function Home() {
   
  return (
    <div className='homePageBody'>
      <div className='homeBackgroundOverlay'>
        <FullScreenBackground></FullScreenBackground>
        <StoreNavbar></StoreNavbar>
      </div>
      <div>
        <RecommendationsCarousel></RecommendationsCarousel>
        <SpDiscountCarousel></SpDiscountCarousel>
        <CategoryCarousel></CategoryCarousel>
      </div>
    </div>
  );
}

