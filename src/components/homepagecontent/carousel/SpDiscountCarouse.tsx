import React, {ReactElement, useState} from "react";
import './SpDiscountCarouseCss.scoped.scss'
import GameInfoCard from "../gameCard/GameInfoCard";
import SmallGameCard from "../gameCard/SmallGameCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import CarouselBase from "./CarouselBase";
import GameSmallCardData from "../../../page/Home/data/GameSmallCardData.json";

export default function SpDiscountCarousel() {
  interface CarouselType {
    title : string;
    pageCount : number;
  }
  const [specialCarouselType, setCarouselPageCount] = useState<CarouselType>({title : '특별할인', pageCount:3});
  let [focusPage, setFocusPage] = useState<number>(0);

  return (
    <CarouselBase focusPage={focusPage} setFocusPage={setFocusPage} carouselType={specialCarouselType} CarouselContent={SpecialDiscountContainer(specialCarouselType.pageCount, focusPage)}></CarouselBase>
  )
}

const SpecialDiscountContainer = (pageCount :number, focusPage : number) => {
  const gameData = useSelector((state : RootState) => {return state.GameCardInfo});
  return (
    <div className="specialDiscountContainer">
      {
        focusPage === pageCount ? 
        <>
          <div>
            <SmallGameCard gameData={GameSmallCardData[6]} index={6}></SmallGameCard>
            <SmallGameCard gameData={GameSmallCardData[7]} index={7}></SmallGameCard>
          </div>
          <div>
            <SmallGameCard gameData={GameSmallCardData[8]} index={8}></SmallGameCard>
            <SmallGameCard gameData={GameSmallCardData[9]} index={9}></SmallGameCard>
          </div>
          <div>
            <SmallGameCard gameData={GameSmallCardData[10]} index={10}></SmallGameCard>
            <SmallGameCard gameData={GameSmallCardData[11]} index={11}></SmallGameCard>
          </div>
        </>:
        <>
          {
            gameData.gameData.map(function(data, index){
              if (focusPage*2 === index || focusPage*2+1 === index) {
                return(
                  <GameInfoCard gameData={data} index={index}></GameInfoCard>
                )
              }
            })
          }
          <div>
            {
              GameSmallCardData.map(function(data, index){
                if (focusPage*2 === index || focusPage*2+1 === index) {
                  return(
                    <SmallGameCard gameData={data} index={index}></SmallGameCard>
                  )
                }
              })
            }
          </div>
        </>
      }
    </div> 
  )
}