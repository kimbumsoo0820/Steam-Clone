import React, { useState } from "react";
import './Tab.scoped.scss'
import ProductData from './Data/ProductData.json'

export default function Tab() {
  const tabType = ["신규 및 인기 신제품", "최고 인기 제품", "특별 할인"];
  
  let [activeTab, setActiveTab] = useState<number>(0);
  let [focusItem, setFoucsItem] = useState<number>(0);

  let newAndPopularData = [...ProductData];
  let mostPopularData = [...ProductData];
  let specialDiscountData = [...ProductData];
  // 신규 및 인기 신제품 정렬 2023년 11월 기준
  newAndPopularData.sort((prev, cur)=> cur.releasedate.indexOf("2023년 11월"));
  newAndPopularData = newAndPopularData.slice(0, 10);
  // 최고 인기 제품 정렬 유저평가 많은 순 기준
  mostPopularData.sort((prev, cur)=> cur.userEvaluation.count - prev.userEvaluation.count)
  mostPopularData = mostPopularData.slice(0, 10);
  // 특별 할인 정렬 할인률 높은 순
  specialDiscountData.sort((prev, cur)=> prev.discount - cur.discount);
  specialDiscountData = specialDiscountData.slice(0, 10);

  let [productData, setProductData] = useState([newAndPopularData, mostPopularData, specialDiscountData]);

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
              <h2 className="itemTitle">{productData[activeTab][focusItem].title}</h2>
              <div className="itemEvaluation">
                <div>전반적 사용자 평가: </div>
                <div>
                  {
                    productData[activeTab][focusItem].userEvaluation.evaluation.includes('긍정적') ? 
                    <span style={{color:'#66c0f4'}}>{productData[activeTab][focusItem].userEvaluation.evaluation}</span>
                    : productData[activeTab][focusItem].userEvaluation.evaluation.includes('부정적') ? 
                    <span style={{color:'#A34C25'}}>{productData[activeTab][focusItem].userEvaluation.evaluation}</span>
                    : <span style={{color:'#B9A074'}}>{productData[activeTab][focusItem].userEvaluation.evaluation}</span>
                  }
                  {` (${[productData[activeTab][focusItem].userEvaluation.count].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')})`}
                </div>
              </div>
              <div className="itemTag">
                {
                  productData[activeTab][focusItem].usertag.map((tagData)=>{
                    return(
                      <div>{tagData}</div>
                    )
                  })
                }
              </div>
              <div className="screenshotBox">
                {
                  productData[activeTab][focusItem].screenshot.map((data)=>{
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