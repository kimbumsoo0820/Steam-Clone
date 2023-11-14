import React from "react";
import './SmallGameCard.scoped.scss';

export default function SmallGameCard({gameData}) {
  return (
    <div className="smallGameCardContainer">
      <div className="cardImg">
        <img src={gameData.mainImg} alt="" />
      </div>
      <div className="saleInfo">
        <div className="dailyDeal">
          <div>오늘의 할인!</div>
        </div>
        <div className="discountBlock">
          <div className="discountPercent">{gameData.discount}%</div>
          <div className="discountPrice">
            <div className="discountOriginalPrice">₩ {[gameData.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
            <div className="discountFinalPrice">₩ {[gameData.price - ((gameData.discount*0.01)*(-1)*(gameData.price))].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
          </div>
        </div>
      </div>

    </div>
  )
}