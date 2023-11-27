import React, { useEffect, useLayoutEffect, useState } from 'react';
import './FavoritPageStyle.scss'
import '../../globalCss.scss'
import SortOptionBox from '../../components/favorit/SortOptionBox';
import SortSettingBox from '../../components/favorit/SortSettingBox';
import OptionSortSets from './Option.json'
import SortSets from './Sort.json'
import games from './CardData.json'


import { setOptions, setSorts, setGame, setFirst } from '../../redux/modules/favoritSort';
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../redux'
import FavoritCardMyRank from '../../components/favorit/FavoritCardMyRank';

import Footer from '../../components/footer/Footer';


// function GetGameData() {
//     let dispatch = useDispatch<AppDispatch>();

//     dispatch(setGame(games))

//     const gameList = useSelector((state: RootState) => state.favoritSort);
//     console.log('GetGameData', gameList.games)

//     return gameList.games
// }


export default function Home() {
  let dispatch = useDispatch<AppDispatch>();
  let [favoritCount, setFavoritCount] = useState<number>(5)
  let [userName, setuserName] = useState<string>('삼겹살에 소주')
  let [optionStatus, setOptionStatus] = useState<boolean>(false)
  let [sortStatus, setsortStatus] = useState<boolean>(false)
  let [loading, setLoading] = useState<boolean>(false)
  let [gameData, setGameData] = useState<any>([])
  
  const gameList = useSelector((state: RootState) => state.favoritSort);
  const firstLoad = useSelector((state: RootState) => state.favoritSort.firstLoad);
  
  useEffect(() => {
    if(firstLoad) {
      dispatch(setGame(games))
      dispatch(setFirst(false))
    }
    dispatch(setOptions(OptionSortSets))
    dispatch(setSorts(SortSets))
  }, [])
  useEffect(()=> {
    console.log('부모 gameData : ',gameList.games)
    setGameData(gameList.games)
    setLoading(true)
  },[gameList.games])
  function changeOptionStatus() {
    setsortStatus(false)
    setOptionStatus(!optionStatus)
  }
  function changeSortStatus() {
    setOptionStatus(false)
    setsortStatus(!sortStatus)
  }
  return (
    <div>
      <div className=' outBox '>
        <div className='navBarPadding'>
          <div className='contents'>
            <div className='favoritLine'>
              <div></div>
              <div className='favoritButton'>찜 목록 ({favoritCount})</div>
            </div>
            <div className='userProfile'>
              <div className='userPicture'>
                <img className='userPictureImage' src={`${process.env.PUBLIC_URL}/image/favoritPage/steamProfile.jpg`} alt="" />
              </div>
              <div className='userName'>{userName}님의 찜 목록</div>
            </div>
            <div className='searchSort'>
              <input type='text' className='searchInput' placeholder="이름 또는 태그로 검색"></input>
              <div className='optionSort' onClick={changeOptionStatus}>
                <div  >옵션</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="https://store.akamai.steamstatic.com/public/images/v6/btn_arrow_down_padded_white.png" alt="" />
                </div>
              </div>
              <div className='sortBox' onClick={changeSortStatus}>
                <div style={{ display: 'flex' }}>
                  <p style={{ color: '#1a9fff', marginRight: '5px' }}>정렬 기준:</p>내순위
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="https://store.akamai.steamstatic.com/public/images/v6/btn_arrow_down_padded_white.png" alt="" />
                  </div>
                </div>
              </div>
              {optionStatus &&
                <div className='optionBox'>
                    <SortOptionBox />
                </div>
              }
              {sortStatus &&
                <div className='sortWrap'>
                  <SortSettingBox />
                </div>
              }
            </div>
            <div className='seperator'></div>
            {loading &&
              <>
                <FavoritCardMyRank myGame={gameData} />
              </>
            }
          </div>
        </div>
      </div>
			<Footer></Footer>
    </div>
  );
}

