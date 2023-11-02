import React, { useEffect, useLayoutEffect, useState } from 'react';
import './SortCss.scss'
import {setOptions, }from '../../redux/modules/favoritSort';
import { useDispatch, useSelector } from 'react-redux'
import {RootState, AppDispatch} from '../../redux'



interface ObjectItems {
    item : string,
    selected : boolean
}
interface ObjectProps {
    title : string;
    items : ObjectItems[];
}
interface propsType {
    options:ObjectProps[];
}

function GetStoreData() {
    const srotList = useSelector((state: RootState) => state.favoritSort);
    return srotList
}




export default function SortOptionBox() {
    const [optionsData,setOptionsData] = useState<ObjectProps[]>(GetStoreData().options)
    let dispatch = useDispatch<AppDispatch>();

    function checkItems(outIndex:number,item:string) {
        // let copyOption = [...optionsData]

        // let a = ['a',['b',c]]
        // b = [...a]

        // b[0] === a[0] = false // 1depth까지는 깊은복사가 됨
        // b[1] === a[1] = true // 2depth부터 얕은복사

        let copyOption =JSON.parse(JSON.stringify(optionsData));
        let findData= copyOption[outIndex].items.find((x:any) => x.item === item)
        let filterData = copyOption[outIndex].items.filter((x:any) => x.item !== item)
        if(findData) {
            findData.selected = !findData.selected
        }
        filterData.forEach((data:any) => {
            data.selected = false
        })
        setOptionsData(copyOption)
        dispatch(setOptions(copyOption))
    }

    return (
        <>
           <div className='optionSettingBox'>
            {optionsData.map((data,outIndex) => (
                    <div className='optionSection' key={`${data.title}`}>
                        <div className='title' >{data.title}</div>
                        <div style={{marginTop:'5px'}}>
                            {data.items.map((items) => (
                                <div style={{display:'flex',marginTop:'5px'}}>
                                    <input type="radio" checked={items.selected === true}  onChange={() => checkItems(outIndex,items.item)} />
                                    <div className='items' key={items.item.toString()}>{items.item}</div>
                                </div>
                            ))}
                        </div>
                    </div>
            ))}
            </div>
        </>
    );
}

