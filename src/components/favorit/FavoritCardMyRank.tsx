import React, { useEffect,useState, useMemo } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux'
import {RootState, AppDispatch} from '../../redux'
import {setOptions, setSorts, setGame }from '../../redux/modules/favoritSort';


interface ItemType {
  id: string,
  name: string,
  price: number,
  evaluation : string,
  release : string,
  favoriteDate : string,
  image : string,
  os : string[],
  tag: string[]
}

// interface ItemType {
//   id: string;
//   content: string;
// }

// const initialItems: ItemType[] = [
//   { id: "1", content: "Item 1" },
//   { id: "2", content: "Item 2" },
//   { id: "3", content: "Item 3" },
//   // Add more items as needed
// ];

// function GetGameData() {
//   const gameList =  useSelector((state: RootState) => state.favoritSort.games);
//   console.log('과연',gameList)
//   return gameList
// }
function SetImage(osType :any) {
  
  if(osType === 'all') {
    return <div >
      <img src="https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3" alt="" />
      <img src="https://store.akamai.steamstatic.com/public/images/v6/icon_platform_mac.png" alt="" />
      <img src="https://store.akamai.steamstatic.com/public/images/v6/icon_platform_linux.png" alt="" />
    </div>
  } else if(osType === 'window') {
    return <div>
      <img src="https://store.akamai.steamstatic.com/public/images/v6/icon_platform_win.png?v=3" alt="" />
    </div>
  } else if(osType === 'macOs') {
    return <div>
              <img src="https://store.akamai.steamstatic.com/public/images/v6/icon_platform_mac.png" alt="" />
            </div>
  } else {
    return <div>
            <img src="https://store.akamai.steamstatic.com/public/images/v6/icon_platform_linux.png" alt="" />
          </div>
  }


}



function App(props:any) {
  let dispatch = useDispatch<AppDispatch>();
  const [items, setItems] = useState<ItemType[]>(props.myGame);
  const [propsObserver,setPropsObserver] = useState<any>(props.myGame)
  
 
  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return; // 드롭 대상이 없는 경우 아무 작업도 수행하지 않음
    }

    const updatedItems = [...items];
    const [reorderedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, reorderedItem);

    dispatch(setGame(updatedItems))
    console.log('여기는 자식',updatedItems)
    setItems(updatedItems);

  };

  const CardContent = styled.div`
    width: 100%;
    height:calc(100% - 35px);
    /* background-color:blue; */
    border-left: 1px solid rgba(0,0,0,0.2);
    padding:15px;
    display:flex;
  `;

  const TagStyle = styled.div<{index? : number}>`
    margin-left: ${(props) => props.index !==0 ? '3px':'0px'};
    color: #8f98a0;
    border : 1px solid rgba(255,255,255,0.2);
    border-radius: 3px;
    cursor: pointer;
    height: 13px;
    padding: 2px 5px;
    font-size:11px;
  `;
  const DeleteButton = styled.div`
    display: inline;
    font-size:12px;
    color:#9EA6AD;
    cursor:pointer;
    text-decoration: none;
    border-bottom: 1px dotted rgba( 178, 184, 189, .6 );
    &:hover {
      color:#c9d3dc;
    }
  `;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items && items.map((item, index) => (
              <div key={index}>
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div>
                    <div
                      ref={provided.innerRef} // 드래그 인식 범위 (박스 전체를 해야 전체가 이동)
                      {...provided.draggableProps} // 드래그 한 인자?
                      style={{
                        width:'100%',height:'177px',display:'flex',marginBottom:'10px',
                        alignItems:'center',backgroundColor:'#3D4D5E',position:'relative',
                        ...provided.draggableProps.style,
                      }}
                    >
                      <div >
                        <div 
                          {...provided.dragHandleProps} //드래그 하기 위해 선택할 부분
                          style={{width:'50px',height:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src="https://store.akamai.steamstatic.com/public/images/v6/wishlist/handle.png" alt="" />
                        </div>
                        <div style={{position:'absolute',left:'20px',right:'0px',
                        transition:'opacity 300ms',bottom:'5px',padding:'3px 4px',
                        color: '#9EA6AD',fontSize:'11px'
                        
                        }}>{index + 1}</div>
                      </div>
                      <CardContent> 
                        <div style={{display:'flex',alignItems:'center',marginRight:'20px'}}>
                          <img style={{width:'291px',height:'136px'}} src={item.image} alt="" />
                        </div>
                        <div>
                          <div style={{color:'#fff',fontSize:'22px',fontWeight:'400',overflow:'hidden'}}>
                            {item.name}
                          </div>
                          <div style={{display:'flex',marginTop:'15px'}}>
                            <div>
                              <div style={{display:'flex'}}>
                                <div style={{fontSize:'11px',color:'#B2B8BD', width:'140px'}}>종합 평가:</div>
                                <div style={{color:'#66C0F4',fontSize:'11px',width:'160px'}}>{item.evaluation}</div>
                              </div>
                              <div style={{display:'flex'}}>
                                <div style={{fontSize:'11px',color:'#B2B8BD', width:'140px'}}>출시일:</div>
                                <div style={{color:'#B2B8BD',fontSize:'11px',width:'160px'}}>{item.release}</div>
                              </div>
                            </div>
                            <div style={{display:'flex',alignItems:'center', backgroundColor:'rgba(0,0,0,0.2)',padding:'0px 2px',width:'231px',height:"40px"}}>
                              <div style={{color:'white',width:'86px',display:'flex',alignItems:'center',fontSize:'12px',justifyContent:'center'}}>₩{item.price}</div>
                              <div style={{cursor:'pointer',borderRadius:'4px',height:'85%',
                                            display:'flex',justifyContent:'center',alignItems:'center',
                                            width:'70%', backgroundColor:'#6DA620',color:'#d2efa9',
                                            fontSize:'15px'}}>장바구니에 추가
                              </div>
                            </div>
                          </div>
                            <div style={{marginTop:'10px', display:'flex'}}>
                              {item.os.map((data) => (
                                <div key={data.toString()}>
                                  {SetImage(data)}
                                </div>
                              )) }
                            </div>
                            <div style={{display:'flex',marginTop:'5px',justifyContent:'space-between'}}>
                              <div style={{display:'flex'}}>
                                {item.tag.map((data:string,index:number) => (
                                  
                                    <TagStyle index={index} key={index}>
                                      {data}
                                    </TagStyle>
                                ))}
                              </div>
                              <div style={{display:'flex',fontSize:'12px',color:'#9EA6AD'}}>
                                <div style={{fontSize:'12px',color:'#9EA6AD'}}>찜한 날짜: {item.favoriteDate}</div>
                                (<DeleteButton >삭제</DeleteButton>)
                              </div>
                            </div>
                            
                        </div>

                      </CardContent>
                    </div>
                  </div>
                )}
              </Draggable>
              
            </div>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;