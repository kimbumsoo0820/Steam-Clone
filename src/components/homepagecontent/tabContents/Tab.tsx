import React, { useState } from "react";
import './Tab.scoped.scss'
import PopularNewProductData from './Data/PopularNewProductData.json'

export default function Tab() {
  const tabType = ["신규 및 인기 신제품", "최고 인기 제품", "인기 출시 예정 제품", "특별 할인"];
  let [productData, setProductData] = useState([PopularNewProductData,]);
  let [activeTab, setActiveTab] = useState<number>(0);
  let [focusItem, setFoucsItem] = useState<number>(0);

  return(
    <div className="tabContainer" style={{overflow: 'visible'}}>
      <div className="tabFlexColum">
        <div className="leftColum">
          <div className="tabButtonContainer">
            <div className="tabButtonRow">
              {
                tabType.map((data, index)=>{
                  return(
                    <div className={index === activeTab ? "tabButton active" : "tabButton"} onClick={()=>{setActiveTab(index)}}>
                      <div className="tabButtonContent">{data}</div>
                    </div>
                  )
                })
              }
            </div>     
          </div>
          <div className="tabContent">
            <h2 style={{display:'none'}}>{tabType[0]}</h2>
            <div className="contentColum">
              <div className="seeMore">{"더 보기 : "}
                <div className="seeMoreButton">
                  <span>신규 출시</span>
                </div>
              </div>
              {
                productData[activeTab].map((data, index)=>{
                  return(
                    <div className={focusItem === index ? "tabItem focus" : "tabItem"} onMouseOver={()=>{setFoucsItem(index)}}>
                      <div className="tabItemCap">
                        <img src={data.image} alt="" />
                      </div>
                      <div className="discountBlock">
                        {
                          data.discount === 0 ? <div className="discountPercent" style={{visibility:'hidden'}}></div> :
                          <div className="discountPercent">{`${data.discount}%`}</div>
                        }
                        <div className="discountPrice">
                          {
                            data.discount === 0 ? 
                            data.price === 0 ? <div className="finalPrice" style={{paddingTop:'10px', color: 'white'}}>무료</div> :
                            <div className="finalPrice" style={{paddingTop:'10px', color: 'white'}}>₩ {[data.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div> :
                            <>
                              <div className="originalPrice">₩ {[data.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                              <div className="finalPrice">₩ {[data.price - ((data.discount*0.01)*(-1)*(data.price))].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                            </>
                          }
                        </div>
                      </div>
                      <div className="tabItemContent">
                        <div className="itemTitle">{data.title}</div>
                        <div className="itemDetail">
                          <div className="platform">
                            {
                              data.platform.map((data)=>{
                                if(data == "windows"){
                                  return(
                                    <span className="platformImgWindows"></span>  
                                  )
                                }
                                if(data == "linux"){
                                  return(
                                    <span className="platformImgLinux"></span>  
                                  )
                                }
                                if(data == "mac"){
                                  return(
                                    <span className="platformImgMac"></span>  
                                  )
                                }
                              })
                            }
                          </div>
                          <div className="userTag">
                            {
                              data.usertag.map((tagdata, index)=>{
                                if(index === data.usertag.length-1) {
                                  return(
                                    <span className="tag">{tagdata}</span>
                                  )
                                }
                                return(
                                  <span className="tag">{tagdata}, </span>
                                )
                              })
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            </div>
        </div>
        <div className="rightColum">
          <div className="itemInfoContainer">
            <div className="itemInfo">
              <h2 className="itemTitle">{PopularNewProductData[focusItem].title}</h2>
              <div className="itemEvaluation">
                <div>전반적 사용자 평가: </div>
                <div>
                  {
                    PopularNewProductData[focusItem].userEvaluation.evaluation.includes('긍정적') ? 
                    <span style={{color:'#66c0f4'}}>{PopularNewProductData[focusItem].userEvaluation.evaluation}</span>
                    : PopularNewProductData[focusItem].userEvaluation.evaluation.includes('부정적') ? 
                    <span style={{color:'#A34C25'}}>{PopularNewProductData[focusItem].userEvaluation.evaluation}</span>
                    : <span style={{color:'#B9A074'}}>{PopularNewProductData[focusItem].userEvaluation.evaluation}</span>
                  }
                  {` (${PopularNewProductData[focusItem].userEvaluation.count})`}
                </div>
              </div>
              <div className="itemTag">
                {
                  PopularNewProductData[focusItem].usertag.map((tagData)=>{
                    return(
                      <div>{tagData}</div>
                    )
                  })
                }
              </div>
              <div className="screenshotBox">
                {
                PopularNewProductData[focusItem].screenshot.map((data)=>{
                  return(
                    <img src={data}/>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}