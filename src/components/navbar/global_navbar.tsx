import React from "react";
import {useState} from "react";
import "./golbal_navbar.scss";



function Navbar() {
  let [isLogin, setLogin] = useState<Boolean>(true);
  let [userName, setUserName] = useState<String>('보쌈족발');
  let [isActive, setActive] = useState<String>("headerMenu_active");


  return (
    <div className="navbar" >
      <div className="content">
        <div className="left_area">
          <div className="logo">
            <div>
              <img src={`${process.env.PUBLIC_URL}/image/header/header_logo.png`}/>
            </div>
          </div>
          <div className="headerMenu">
            <a href="#" className={'headerMenu_shop ' + isActive}>상점</a>
            <a href="#" className="headerMenu_community">커뮤니티</a>
            {
              isLogin ? 
              <>
                <a href="#" className="headerMenu_username">{userName}</a>
                <a href="#" className="headerMenu_chatting">채팅</a>
              </> :
              <a href="#" className="headerMenu_infomation">정보</a>
            }
            <a href="" className="headerMenu_support">지원</a>
          </div>
        </div>
        <div className="right_area">
          right
        </div>
      </div>
    </div>
  )
}


export default Navbar;