import React, { useEffect, useLayoutEffect, useState } from 'react';
import FullScreenBackground from '../../components/homepagecontent/homebackground/FullScreenBackground';
import StoreNavbar from '../../components/homepagecontent/StoreNav/StoreNavbar';


export default function Home() {
   
  return (
    <div className='homeBackgroundOverlay'>
      <FullScreenBackground></FullScreenBackground>
      <StoreNavbar></StoreNavbar>
    </div>
  );
}