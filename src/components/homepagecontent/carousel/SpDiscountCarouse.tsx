import React, {useState} from "react";
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
            <SmallGameCard gameData={GameSmallCardData[6]}></SmallGameCard>
            <SmallGameCard gameData={GameSmallCardData[7]}></SmallGameCard>
          </div>
          <div>
            <SmallGameCard gameData={GameSmallCardData[8]}></SmallGameCard>
            <SmallGameCard gameData={GameSmallCardData[9]}></SmallGameCard>
          </div>
          <div>
            <SmallGameCard gameData={GameSmallCardData[10]}></SmallGameCard>
            <SmallGameCard gameData={GameSmallCardData[11]}></SmallGameCard>
          </div>
        </>:
        <>
          <GameInfoCard gameData={gameData.gameData[focusPage*2]}></GameInfoCard>
          <GameInfoCard gameData={gameData.gameData[focusPage*2+1]}></GameInfoCard>
          <div>
            <SmallGameCard gameData={GameSmallCardData[focusPage*2]}></SmallGameCard>
            <SmallGameCard gameData={GameSmallCardData[focusPage*2+1]}></SmallGameCard>
          </div>
        </>
      }
    </div> 
  )
}