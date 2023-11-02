import React, { useEffect, useLayoutEffect, useState } from 'react';
import FullScreenBackground from '../../components/homebackground/FullScreenBackground';

export default function Home() {
   
  return (
    <div className='homeBackgroundOverlay'>
      <FullScreenBackground/>
    </div>
  );
}