import React, { useEffect, useLayoutEffect, useState } from 'react';
import './FavoritCardCss.scss'
import { ReactSortable } from "react-sortablejs-typescript";

interface ItemType {
    id: number;
    name: string;
  }



export default function FavoritCardMyRank() {
    const [tesetLIst, setTestList] = useState<ItemType[]>([
        { id: 1, name: "shrek" },
        { id: 2, name: "fiona" }
    ]);
    
    return (
        <>
            {/* <ReactSortable list={tesetLIst} setList={setTestList} handle=".handle">
                {tesetLIst.map(item => (
                    <div key={item.id}>{item.name}</div>
                    
                ))}
            </ReactSortable> */}
        </>
    );
}

