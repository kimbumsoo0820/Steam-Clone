import React, { useEffect, useLayoutEffect, useState } from 'react';
import './SortCss.scss'

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



export default function SortOptionBox(props:propsType) {
    const [cehckIndex,setCheckIndex] = useState<number>()

    function checkItems(item:string) {
        console.log(item)
    }
    
    console.log(props.options[0].items)
    return (
        <>
           <div className='optionSettingBox'>
            {props.options.map((data) => (
                    <div className='optionSection' key={`${data.title.toString()}key`}>
                        <div className='title'>{data.title}</div>
                        <div style={{marginTop:'5px'}}>
                            {data.items.map((items,index) => (
                                <div style={{display:'flex'}}>
                                    <input type="radio" onChange={() => checkItems(items.item)} />
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

