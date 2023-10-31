import React from "react";
import {useState} from "react";
import "./golbal_navbar.scss";



function Navbar() {
  const [isLogin, setLogin] = useState(true);

  return (
    <div className="navbar">
      <div className="content">
        <div className="left_area">
          <div className="logo">
            <a href="#">
              <div className="image"></div>
            </a>
          </div>
          <div className="headerMenu">
            <a href="#" className="headerMenu_shop headerMenu_active">상점</a>
            <a href="#" className="headerMenu_community">커뮤니티</a>
            {
              isLogin ? 
              <>
                <a href="#" className="headerMenu_username">joseggi</a>
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

function HederMenuLogin(props:Boolean) {
  if (props) {
    return(
      <>
        
      </>
      
    )
  }
}

export default Navbar;