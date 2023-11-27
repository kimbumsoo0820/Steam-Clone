import React, {LegacyRef, createRef, useEffect, useRef, useState} from "react";
import './SmallGameCard.scoped.scss';

export default function SmallGameCard({gameData, index}) {
  let [screenShotindex, setScreenShotIndex] = useState(0);
  let [isHover, setIsHover] = useState(false);

  useEffect(function(){
    if (isHover) {
      const timer = setTimeout(function(){
        if (screenShotindex === gameData.screenShot.length-1) {
          setScreenShotIndex(0);
        } else {
          setScreenShotIndex(screenShotindex+1);
        }
      }, 1000)
    }
  },)
  const hoverInfoRef : LegacyRef<HTMLDivElement> = createRef();
  
  return (
    <div className="smallGameCardContainer">
      <div onMouseOver={()=>GameHover(setIsHover, hoverInfoRef)} onMouseOut={()=>GameHoverOut(setIsHover, hoverInfoRef)}>
        <div className="cardImg">
          <img src={gameData.mainImg}/>
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
      <div className="gameHoverInfo" key={index} ref={hoverInfoRef}>
        <div className='infoContainer'>
          <div className='gametitle'>{gameData.name}</div>
          <div className='releaseDate'>출시 : {gameData.releasedate}</div>
          <div className='screenShot'>
            <img src={gameData.screenShot[screenShotindex]} alt="" />
          </div>
          <div className='userEvaluation'>전반적 사용자 평가 :
            <div><span style={{color:'#66C0F4'}}>{gameData.userEvaluation.evaluation}</span>{` (평가 ${[gameData.userEvaluation.count].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}개)`}</div>
          </div>
          <div className='userTag'>사용자 태그 :</div>
          <div className='userTagBlock'>
            {
              gameData.userTag.map(function(data, index){
                return(
                  <div>{data}</div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
function GameHover(setIsHover, ref) {
  ref.current.style.visibility = 'visible';
  ref.current.style.opacity = 1;
  setIsHover(true);
}
function GameHoverOut(setIsHover, ref) {
  ref.current.style.visibility = 'hidden';
  ref.current.style.opacity = 0;
  setIsHover(false);
}

