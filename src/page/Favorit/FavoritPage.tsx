import React, { useEffect, useLayoutEffect, useState } from 'react';
import './FavoritPageStyle.scss'
import '../../globalCss.scss'


export default function Home() {
    let [favoritCount,setFavoritCount] = useState<number>(5)
    let [userName,setuserName] = useState<string>('삼겹살에 소주')

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
                                <img src={`${process.env.PUBLIC_URL}/image/favoritPage/steamProfile.jpg`} alt="" />
                            </div>
                            <div className='userName'>{userName}님의 찜 목록</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

