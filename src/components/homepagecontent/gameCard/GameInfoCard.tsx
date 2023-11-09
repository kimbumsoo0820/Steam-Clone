import React, {useState} from 'react'
import './GameInfoCardCss.scoped.scss'

export default function GameInfoCard() {
  return (  
    <div className='bigcardContainer'>
      <div className="cardImg">
        <img src="https://cdn.akamai.steamstatic.com/steam/spotlights/76207d4fb8f8531d01f2348f/spotlight_image_koreana.jpg?t=1698945244" alt="" />
      </div>
      <div className="cardContent">
        <h2>주중 특가</h2>
        <div className='contentBody'>
          할인 혜텍은 2023년 11월 21일 오전 3시 00분에 종료됩니다.
        </div>
        <div className='discountArea'>
          <div className='discountBlock'>
            <div className="discountPercent">-30%</div>
            <div className="discountPrice">
              <div className="discountOriginalPrice">₩ 11,000</div>
              <div className="discountFinalPrice">₩ 7,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
