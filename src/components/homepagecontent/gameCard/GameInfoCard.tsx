import React, {useState} from 'react'
import './GameInfoCardCss.scoped.scss'

export default function GameInfoCard({gameData, discount, isBig}) {

  return (
    <div>
      {
        isBig === true ?
        <div className='bigCardContainer'>
        <div className="cardImg">
          <img src={gameData.image} alt="" />
        </div>
        <div className="cardContent">
          <h2>주중 특가</h2>
          <div className='contentBody'>
            할인 혜텍은 2023년 11월 21일 오전 3시 00분에 종료됩니다.
          </div>
          <div className='discountArea'>
            <div className='discountBlock'>
              <div className="discountPercent">{discount}%</div>
              <div className="discountPrice">
                <div className="discountOriginalPrice">₩ {[gameData.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                <div className="discountFinalPrice">₩ {[gameData.price - ((discount*0.01)*(-1)*(gameData.price))].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
              </div>
            </div>
          </div>
        </div>
        </div>
        :
        <div className='smallCardContainer'>

        </div>
      }
    </div>
  )
}
