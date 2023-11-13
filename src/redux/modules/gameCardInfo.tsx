import { createSlice } from "@reduxjs/toolkit";
import gameInfo from '../../page/Home/data/GameCardData.json'

const initialState = {
  gameData : gameInfo
}

const gameCardinfo = createSlice({
  name : 'gameCradInfo',
  initialState,

  reducers : {
  },

});

export default gameCardinfo;