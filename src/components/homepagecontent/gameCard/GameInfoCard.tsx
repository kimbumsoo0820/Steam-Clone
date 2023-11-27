import React, {useEffect, useState} from 'react'
import './GameInfoCardCss.scoped.scss'


export default function GameInfoCard({gameData, index}) {
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
  return (
    <div className='bigCardContainer'>
      <div onMouseOver={()=>GameHover(gameData, index, setIsHover)} onMouseOut={()=>GameHoverOut(gameData, index, setIsHover)}>
        <div className="cardImg">
          <img src={gameData.image}/>
        </div>
        <div className="cardContent">
          <h2>주중 특가</h2>
          <div className='contentBody'>
            할인 혜텍은 2023년 11월 21일 오전 3시 00분에 종료됩니다.
          </div>
          <div className='discountArea'>
            <div className='discountBlock'>
              <div className="discountPercent">{gameData.discount}%</div>
              <div className="discountPrice">
                <div className="discountOriginalPrice">₩ {[gameData.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                <div className="discountFinalPrice">₩ {[gameData.price - ((gameData.discount*0.01)*(-1)*(gameData.price))].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div key={gameData.id} className="gameHoverInfo">
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

function GameHover(gameData, index, setIsHover) {
  let gameHoverInfo : HTMLElement = document.querySelectorAll('.gameHoverInfo')[index%2] as HTMLElement;
  gameHoverInfo.style.visibility ="visible";
  gameHoverInfo.style.opacity = '1';
  setIsHover(true);
}
function GameHoverOut(gameData, index, setIsHover) {
  let gameHoverInfo : HTMLElement = document.querySelectorAll('.gameHoverInfo')[index%2] as HTMLElement;
  gameHoverInfo.style.visibility ="hidden";
  gameHoverInfo.style.opacity = '0';
  setIsHover(false);
}
