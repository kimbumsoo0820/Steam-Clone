import React, { useEffect, useLayoutEffect, useState } from 'react';

interface propsType {
    word : String;
}

export default function Home(props : propsType) {
    let [user , setUser] = useState<String>(() => {
        return 'hello????'
    });
    console.log(props.word)
    

    return (
        <div className='hello' style={{color : 'red', backgroundColor: 'blue'}}>
            {props.word}
        </div>
    );
}