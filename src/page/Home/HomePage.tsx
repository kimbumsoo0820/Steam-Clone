import React, { useEffect, useLayoutEffect, useState } from 'react';
import './HomePageCss.scss'
import FullScreenBackground from '../../components/homepagecontent/homebackground/FullScreenBackground';
import StoreNavbar from '../../components/homepagecontent/StoreNav/StoreNavbar';
import BasicCarousel from '../../components/homepagecontent/carousel/BasicCarousel';


export default function Home() {
   
  return (
    <div className='homePageBody'>
      <div className='homeBackgroundOverlay'>
        <FullScreenBackground></FullScreenBackground>
        <StoreNavbar></StoreNavbar>
      </div>
      <div>
        <BasicCarousel></BasicCarousel>
      </div>
    </div>
  );
}