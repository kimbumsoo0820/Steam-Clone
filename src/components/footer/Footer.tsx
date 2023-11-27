import React from 'react'
import './Footer.scoped.scss'

export default function Footer() {
  return(
    <div className='footer'>
      <div className="footerContent">
        <div className="line"></div>
        <div className="logoSteam">
          <img src="https://store.akamai.steamstatic.com/public/images/v6/logo_steam_footer.png" alt="" />
        </div>
        <div className="logoValve">
          <img src="https://store.akamai.steamstatic.com/public/images/footerLogo_valve_new.png" alt="" />
        </div>
        <div className="footerText">
          <div>© 2023 Valve Corporation. All rights reserved. 모든 상표는 미국 및 기타 국가에서 해당하는 소유자의 재산입니다.</div>
          <div>
            {"부가가치세 포함"}&nbsp;&nbsp;
            <a href="https://store.steampowered.com/privacy_agreement/?snr=1_44_44_" target="_blank" rel="">개인정보 보호정책</a>
            &nbsp; | &nbsp;
            <a href="https://store.steampowered.com/legal/?snr=1_44_44_" target="_blank" rel="">사용권</a>
            &nbsp; | &nbsp;
            <a href="https://store.steampowered.com/subscriber_agreement/?snr=1_44_44_" target="_blank" rel="">Steam 이용 약관</a>
            &nbsp; | &nbsp;
            <a href="https://store.steampowered.com/steam_refunds/?snr=1_44_44_" target="_blank" rel="">환불</a>
            &nbsp; | &nbsp;
            <a href="https://store.steampowered.com/account/cookiepreferences/?snr=1_44_44_" target="_blank" rel="">쿠키</a>
          </div>
        </div>
        <div style={{clear:'left'}}></div>
        <br/>
        <div className="line"></div>
        <div className="valveLink">
          <a href="http://www.valvesoftware.com/about" target="_blank" rel="">Valve 정보</a>
          &nbsp; | &nbsp;
          <a href="http://www.valvesoftware.com" target="_blank" rel="">채용 정보</a>
          &nbsp; | &nbsp;
          <a href="http://www.steampowered.com/steamworks/" target="_blank" rel="">Steamworks</a>
          &nbsp; | &nbsp;
          <a href="https://partner.steamgames.com/steamdirect" target="_blank" rel="">Steam 배포</a>
          &nbsp; | &nbsp;
          <a href="https://help.steampowered.com/ko/?snr=1_44_44_">지원</a>
          &nbsp; | &nbsp;
          <a href="https://store.steampowered.com/digitalgiftcards/?snr=1_44_44_" target="_blank" rel="">기프트 카드</a>
          &nbsp; | &nbsp;
          <a href="https://steamcommunity.com/linkfilter/?u=http%3A%2F%2Fwww.facebook.com%2FSteam" target="_blank" rel=" noopener"><img src="https://store.akamai.steamstatic.com/public/images/ico/ico_facebook.gif"/> Steam</a>
          &nbsp; | &nbsp;
          <a href="http://twitter.com/steam" target="_blank" rel=""><img src="https://store.akamai.steamstatic.com/public/images/ico/ico_twitter.gif"/> @steam</a>
        </div>
      </div>
    </div>
  )
}
