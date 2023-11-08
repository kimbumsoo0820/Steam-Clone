import React from "react";
import {useState} from "react";
import "./golbal_navbar.scss";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let [isLogin, setLogin] = useState<Boolean>(false);
  let [userName, setUserName] = useState<String>('보쌈족발');
  let [isActive, setActive] = useState<String>("headerMenu_active");
  const movePage = useNavigate();
  function onClickLogo() {
    movePage('/');
  }
  return (
    <div className="navbar" >
      <div className="content">
        <div className="left_area">
          <div className="logo">
            <div onClick={onClickLogo}>
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
          <div className="actionMenu">
            {
              isLogin ?
              <>
                <div style={{display:"flex"}}>
                  <div className="installBtnWrap">
                    <div className="installBtnContent">
                      Steam 설치
                   </div>
                  </div>
                  <div className="notificationArea" style={{position:"relative"}}>
                    <div style={{display:"flex"}}>
                      <div className="notificationBtn">
                      <svg className="notificationBtnContent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" style={{}}><g className="SVGIcon_Notification"><path fill-rule="evenodd" clip-rule="evenodd" d="M32 24V26H4V24L8 19V12C8 9.34784 9.05357 6.8043 10.9289 4.92893C12.8043 3.05357 15.3478 2 18 2C20.6522 2 23.1957 3.05357 25.0711 4.92893C26.9464 6.8043 28 9.34784 28 12V19L32 24Z" fill="currentColor" style={{}}></path><path className="SVGIcon_Notification_Uvula" fill-rule="evenodd" clip-rule="evenodd" d="M18 34C19.2396 33.9986 20.4483 33.6133 21.46 32.897C22.4718 32.1807 23.2368 31.1687 23.65 30H12.35C12.7632 31.1687 13.5282 32.1807 14.54 32.897C15.5517 33.6133 16.7604 33.9986 18 34Z" fill="currentColor" style={{}}></path></g></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="nameContent">{userName}</span>
                  </div>
                </div>
                <div style={{display:"block"}}>
                  <div className="walletCntArea">
                    <span className="walletCnt">₩ 0</span>
                  </div>
                </div>
              </> 
              :
                <>
                  <div style={{display:"flex"}}>
                    <div className="installBtnWrap">
                      <div className="installBtnContentGreen">
                        Steam 설치
                     </div>
                    </div>
                    <div className="loginArea">
                      <span className="loginLink">로그인</span>
                      &nbsp;|&nbsp;
                      <span className="languageComboBox">언어</span>
                    </div>
                  </div>
                </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}


export default Navbar;