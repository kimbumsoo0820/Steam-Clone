import React, {useState, ReactElement, useEffect, Dispatch, MouseEventHandler} from "react";
import './BasicCarouselCss.scss';
import { url } from "inspector";
import axios from "axios";

export default function BasicCarousel(props:any) {
  interface ItemType {
    id : React.Key;
    gameName : String;
    url : string;
    screenShot : string[];
  }
  const [item, setItem] = useState<ItemType[]>([
    {
      id: 1,
      gameName : 'CyberPunk 2077',
      url:'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header_alt_assets_1_koreana.jpg?t=1699262718',
      screenShot : [
        'https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_7924f64b6e5d586a80418c9896a1c92881a7905b.600x338.jpg?t=1699262718', 
        'https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_4eb068b1cf52c91b57157b84bed18a186ed7714b.600x338.jpg?t=1699262718', 
        'https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_0002f18563d313bdd1d82c725d411408ebf762b0.600x338.jpg?t=1699262718', 
        'https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_284ba40590de8f604ae693631c751a0aefdc452e.600x338.jpg?t=1699262718'],
    },
    {
      id: 2,
      gameName : 'Monster Hunter:World',
      url:'https://cdn.akamai.steamstatic.com/steam/apps/582010/header.jpg?t=1697508240',
      screenShot : ['',''],
    },
    {
      id: 3,
      gameName : 'Devil May Cry 5',
      url:'https://cdn.akamai.steamstatic.com/steam/apps/601150/header.jpg?t=1694395559',
      screenShot : ['','']
    },
  ]);
  let [focusItem, setFocusItem] = useState<number>(0);

  function changeFocus(e:React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setFocusItem(1);
  }
  let [isFocus, setIsFocus] = useState<Boolean>(true);

  useEffect(function(){
    const carouselItem:HTMLElement = document.querySelector('.carouselItem');
    carouselItem.style.opacity = '0.6';

    const timer = setTimeout(function(){
      carouselItem.style.opacity = '1';
    }, 200)
  }, [focusItem])

  return (
    <div className="carousel">
      <div className="carouselContent">
        <h2>특집 및 추천 제품</h2>
        <div className="contentArea">
          <div className="carouselItem"> 
            <div className="itemMain">
              <img src={item[focusItem].url} alt="" />
            </div>
            <div className="itemInfo">
              <div className="gameName">
                <div>{item[focusItem].gameName}</div>
              </div>
              <div className="screenShot">
                {
                  item[focusItem].screenShot.map(function(data, index : number){
                    return (
                      <div onMouseOver={function(){console.log(data)}}>
                        <div style={{backgroundImage : `url(${item[focusItem].screenShot[index]})`, backgroundRepeat : 'no-repeat', backgroundSize : 'cover'}}></div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="reason"></div>
              <div className="discountBlock"></div>
              <div className="platform"></div>
            </div>
          </div>
          <div className="carouselThumbs">
            {
              item.map(function(data : ItemType, index : number):ReactElement{
                return (
                  <div key={data.id} className={ index === focusItem ? "focus" : ""} 
                  onClick={function(){
                    setFocusItem(index);
                  }}></div>
                )
              })
            }
          </div>
          <div className="arrowLeft" onClick={function(){
            if (focusItem === 0)
            {
              setFocusItem(item.length-1);
            } else {
              setFocusItem(focusItem-1);
            }
          }}>
            <div></div>
          </div>
          <div className="arrowRight" onClick={function(){
            if (focusItem === item.length-1)
            {
              setFocusItem(0);
            } else {
              setFocusItem(focusItem+1);
            }
          }}>
            <div></div>
          </div>
        </div>
      </div>
    </div>

  )
}