import React, { useEffect, useLayoutEffect, useState } from 'react';
import './SortCss.scss'

import {setOptions, }from '../../redux/modules/favoritSort';
import { useDispatch, useSelector } from 'react-redux'
import {RootState, AppDispatch} from '../../redux'

function GetSorteData() {
    const srotList = useSelector((state: RootState) => state.favoritSort);
    return srotList
}


export default function SortSettingBox() {
    const [sortData,setSortData] = useState<string[]>(GetSorteData().sorts)
    let dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            { sortData &&
           <div className='sortSettingBox'>
                {
                    sortData.map((data)=> (
                        <div className='sortList'  key={data.toString()}>{data}</div>
                    ))
                }
            </div>
            }
        </div>
    );
}

