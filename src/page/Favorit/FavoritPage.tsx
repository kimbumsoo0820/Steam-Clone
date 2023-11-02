import React, { useEffect, useLayoutEffect, useState } from 'react';
import './FavoritPageStyle.scss'
import '../../globalCss.scss'
import SortOptionBox from '../../components/favorit/SortOptionBox'; 
import SortSettingBox from '../../components/favorit/SortSettingBox';
import OptionSortSets from './Option.json'

import {setOptions, }from '../../redux/modules/favoritSort';
import { useDispatch, useSelector } from 'react-redux'
import {RootState, AppDispatch} from '../../redux'


export default function Home() {
    let dispatch = useDispatch<AppDispatch>();
    let [favoritCount,setFavoritCount] = useState<number>(5)
    let [userName,setuserName] = useState<string>('삼겹살에 소주')
    let [optionStatus,setOptionStatus] = useState<boolean>(false)
    let [sortStatus,setsortStatus] = useState<boolean>(false)

    dispatch(setOptions(OptionSortSets))

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
                            <div className='optionSort' onClick={changeOptionStatus}>옵션↓</div>
                            <div className='sortBox' onClick={changeSortStatus}><p style={{color:'#1a9fff', marginRight:'5px'}}>정렬 기준:</p>내순위↓</div>
                            { optionStatus &&
                                <div className='optionBox'>
                                    <SortOptionBox />
                                </div>
                            }
                            {sortStatus && 
                                <div className='sortSettingBox'>
                                    <SortSettingBox />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

