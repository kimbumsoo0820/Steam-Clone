import React, {ReactElement, useState} from "react";
import "./StoreNavbarCss.scss";
import { Link } from "react-router-dom";

export default function StoreNavbar() {
  const [navTabName, setNavTabName] = useState<String[]>(['내 상점', '신규 및 특집', '카테고리', '포인트 상점', '뉴스', '실험실']);
  return(
    <>
      <div className="storeNavArea">
      <div className="storeHeader">
        <div className="content">
          <div className="wishList">
            <div style={{color:'#C6d4df'}}>
              <div className="wishListBtn">
                <Link to="/favorit" className="wishListLink">찜 목록</Link>
              </div>
            </div>
          </div>
          <div className="navigationArea">
            <div className="navBackground">
              <div className="navBar">
                {
                navTabName.map(function(data : String, index : React.Key) : ReactElement{
                    return(
                      <div className="navTab" key={index}>
                        <span>{data}</span>
                      </div>
                    )
                  })
                }
                <div className="flexSpacer" style={{flex:'1', width:'20px'}}></div>
                <div className="searchArea">
                  <div className="search">
                    <form action="#">
                      <div className="searchBox">
                        <input className="searchInput" id="temp" name="term" type="text" placeholder="검색하기" size={22} autoComplete={"off"} maxLength={64}/>
                        <a href="#">
                          <img src="https://store.akamai.steamstatic.com/public/images/blank.gif"/>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="test"></div>
    </>
    
  )
}
