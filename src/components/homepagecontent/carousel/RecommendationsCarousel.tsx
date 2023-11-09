import React, {useState, ReactElement, useEffect, Dispatch, MouseEventHandler} from "react";
import './RecommendationsCarouselCss.scoped.scss';
import { url } from "inspector";
import axios from "axios";

export default function RecommendationsCarousel(props:any) {
  interface ItemType {
    id : React.Key;
    gameName : String;
    mainImgUrl : string;
    screenShot : string[];
    discount : string;
    saleStatus : string;
    platform : string[];
  }
  const [item, setItem] = useState<ItemType[]>([
    {
      id: 1,
      gameName : 'CyberPunk 2077',
      mainImgUrl:'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header_alt_assets_1_koreana.jpg?t=1699262718',
      screenShot : [
        'https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_7924f64b6e5d586a80418c9896a1c92881a7905b.600x338.jpg?t=1699262718', 
        'https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_4eb068b1cf52c91b57157b84bed18a186ed7714b.600x338.jpg?t=1699262718', 
        'https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_0002f18563d313bdd1d82c725d411408ebf762b0.600x338.jpg?t=1699262718', 
        'https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_284ba40590de8f604ae693631c751a0aefdc452e.600x338.jpg?t=1699262718'],
      discount : '₩ 66000',
      saleStatus : '판매 중',
      platform : ['window'],
    },
    {
      id: 2,
      gameName : 'Monster Hunter:World',
      mainImgUrl:'https://cdn.akamai.steamstatic.com/steam/apps/582010/header.jpg?t=1697508240',
      screenShot : [
        'https://cdn.akamai.steamstatic.com/steam/apps/582010/ss_0dfb20f6f09c196bfc317bd517dc430ed6e6a2a4.600x338.jpg?t=1697508240',
        'https://cdn.akamai.steamstatic.com/steam/apps/582010/ss_669f9008f708c19fe3c41d647516f7a73bf26d24.600x338.jpg?t=1697508240',
        'https://cdn.akamai.steamstatic.com/steam/apps/582010/ss_25902a9ae6977d6d10ebff20b87e8739e51c5b8b.600x338.jpg?t=1697508240',
        'https://cdn.akamai.steamstatic.com/steam/apps/582010/ss_681cc5358ec55a997aee9f757ffe8b418dc79a32.600x338.jpg?t=1697508240'],
      discount : '₩ 34900',
      saleStatus : '판매 중',
      platform : ['window', 'mac'],
    },
    {
      id: 3,
      gameName : 'Devil May Cry 5',
      mainImgUrl:'https://cdn.akamai.steamstatic.com/steam/apps/601150/header.jpg?t=1694395559',
      screenShot : [
        'https://cdn.akamai.steamstatic.com/steam/apps/601150/ss_4410bada2565843dae693b03ac3a50256ff5dd66.600x338.jpg?t=1694395559', 
        'https://cdn.akamai.steamstatic.com/steam/apps/601150/ss_d1e0b403f593f17ad195c5382a7788d71c6f406a.600x338.jpg?t=1694395559', 
        'https://cdn.akamai.steamstatic.com/steam/apps/601150/ss_e2be70565f94a7f6c392cccddce08c67f2f87612.600x338.jpg?t=1694395559',
        'https://cdn.akamai.steamstatic.com/steam/apps/601150/ss_f669d4627db07e61b87728d94d72bc1eabfd0349.600x338.jpg?t=1694395559'],
      discount : '₩ 33400',
      saleStatus : '판매 중',
      platform : ['window', 'linux'],
    },
  ]);
  let [focusItem, setFocusItem] = useState<number>(0);

  function changeFocus(e:React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setFocusItem(1);
  }
  useEffect(function(){
    const carouselItem:HTMLElement = document.querySelector('.carouselItem');
    carouselItem.style.opacity = '0.6';

    const timer = setTimeout(function(){
      carouselItem.style.opacity = '1';
      clearTimeout(timer);
    }, 200)
    
  }, [focusItem])

  return (
    <div className="carousel">
      <div className="carouselContent">
        <h2>특집 및 추천 제품</h2>
        <div className="contentArea">
          <div className="carouselItem"> 
            <div className="itemMain">
              <img className="itemMainImg" src={item[focusItem].mainImgUrl} alt="" />
            </div>
            <div className="itemInfo">
              <div className="gameName">
                <div>{item[focusItem].gameName}</div>
              </div>
              <div className="screenShot">
                {
                  item[focusItem].screenShot.map(function(data, index : number){
                    return (
                      <div key={index} onMouseOver={function(){
                        const itemMainImg: HTMLImageElement = document.querySelector('.itemMainImg');
                        itemMainImg.src = item[focusItem].screenShot[index];
                      }} onMouseOut={function(){
                        const itemMainImg: HTMLImageElement = document.querySelector('.itemMainImg');
                        itemMainImg.src = item[focusItem].mainImgUrl;
                      }}>
                        <div style={{backgroundImage : `url(${item[focusItem].screenShot[index]})`, backgroundRepeat : 'no-repeat', backgroundSize : 'cover'}}></div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="reason">
                <div className="saleStaus">{item[focusItem].saleStatus}</div>
                <div className="additional">
                  <div>최고 인기 제품</div>
                </div>
              </div>
              <div className="discountBlock">
                <div className="discountPrice">{item[focusItem].discount}</div>
              </div>
              <div className="platform">
                {
                  item[focusItem].platform.map(function(data : string, index : number){
                    return (
                      <div key={index} className={data}></div>
                    )
                  })
                }
              </div>
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