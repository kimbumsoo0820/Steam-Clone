import React, { useEffect, useLayoutEffect, useState } from 'react';
import './HomePageCss.scss'
import FullScreenBackground from '../../components/homepagecontent/homebackground/FullScreenBackground';
import StoreNavbar from '../../components/homepagecontent/StoreNav/StoreNavbar';
import RecommendationsCarousel from '../../components/homepagecontent/carousel/RecommendationsCarousel';
import SpecialDiscountCarousel from '../../components/homepagecontent/carousel/SpecialDiscountCarousel'


export default function Home() {
   
  return (
    <div className='homePageBody'>
      <div className='homeBackgroundOverlay'>
        <FullScreenBackground></FullScreenBackground>
        <StoreNavbar></StoreNavbar>
      </div>
      <div>
        <RecommendationsCarousel></RecommendationsCarousel>
        <SpecialDiscountCarousel title={'특별 할인'} name={'조세'}></SpecialDiscountCarousel>
      </div>
    </div>
  );
}