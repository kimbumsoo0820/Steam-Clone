import React, {useState} from "react";
import './SpDiscountCarouseCss.scoped.scss'
import GameInfoCard from "../gameCard/GameInfoCard";
import gameData from "../../../page/Home/data/GameCardData.json"
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

export default function SpDiscountCarousel() {
  const gameData = useSelector((state : RootState) => {return state.GameCardInfo});

  return (
    <div className="specialDiscountContainer">
      <GameInfoCard gameData={gameData.gameData[0]} discount={-33} isBig={true}></GameInfoCard>
      <GameInfoCard gameData={gameData.gameData[1]} discount={-30} isBig={true}></GameInfoCard>
      <GameInfoCard gameData={gameData.gameData[2]} discount={-50} isBig={false}></GameInfoCard>
      <GameInfoCard gameData={gameData.gameData[2]} discount={-50} isBig={false}></GameInfoCard>
    </div> 
  )
}