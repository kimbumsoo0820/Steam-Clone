import React, {useState, ReactElement, useEffect, Dispatch} from "react";
import './BasicCarouselCss.scss';
import { url } from "inspector";

export default function BasicCarousel(props:any) {
  interface ItemType {
    id : React.Key;
    gameName : String;
    url : string;
  }
  const [item, setItem] = useState<ItemType[]>([
    {
      id: 1,
      gameName : 'Cyber Punk 2077',
      url:'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header_alt_assets_1_koreana.jpg?t=1699262718'
    },
    {
      id: 2,
      gameName : 'MonsterHunter World',
      url:'https://cdn.akamai.steamstatic.com/steam/apps/582010/header.jpg?t=1697508240'
    },
    {
      id: 3,
      gameName : '',
      url:'https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_1280.jpg'
    },
  ]);
  return (
    <div className="carousel">
      <div className="carouselContent">
        <h2>특집 및 추천 제품</h2>
        <div className="contentArea">
          {
            item.map(function(data : ItemType, index : Number) : ReactElement {
              return (
                <div className="carouselItem" key={data.id}>
                  <div className="itemMain">
                    <img src={data.url} alt="" />
                  </div>
                  <div className="itemInfo">
                    <div className="gameName">
                      <div>{data.gameName}</div>
                    </div>
                    <div className="screenShot"></div>
                    <div className="reason"></div>
                    <div className="discountBlock"></div>
                    <div className="platform"></div>
                  </div>
                </div>
              )
            })
          }
          <div className="carouselThumbs"></div>
          <div className="arrowLeft"></div>
          <div className="arrowRight"></div>
        </div>
      </div>
    </div>

  )
}