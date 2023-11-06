import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from 'styled-components';
interface ItemType {
  id: string;
  content: string;
}

const initialItems: ItemType[] = [
  { id: "1", content: "Item 1" },
  { id: "2", content: "Item 2" },
  { id: "3", content: "Item 3" },
  // Add more items as needed
];

function App() {
  const [items, setItems] = useState<ItemType[]>(initialItems);


  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return; // 드롭 대상이 없는 경우 아무 작업도 수행하지 않음
    }

    const updatedItems = [...items];
    const [reorderedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, reorderedItem);

    setItems(updatedItems);
  };

  const CardContent = styled.div`
    width: 100%;
    height:calc(100% - 20px);
    background-color:blue;
    padding:10px;
  `;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => (
              <div key={index}>
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div >
                    <div
                      ref={provided.innerRef} // 드래그 인식 범위 (박스 전체를 해야 전체가 이동)
                      {...provided.draggableProps} // 드래그 한 인자?
                      style={{
                        width:'100%',height:'157px',display:'flex',marginBottom:'10px',
                        alignItems:'center',backgroundColor:'#3D4D5E',
                        ...provided.draggableProps.style,
                      }}
                    >
                      <div 
                      {...provided.dragHandleProps} //드래그 하기 위해 선택할 부분
                      style={{width:'50px',height:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <img src="https://store.akamai.steamstatic.com/public/images/v6/wishlist/handle.png" alt="" />
                      </div>
                      {/* 아래는 styledComponent 사용함 css의 calc 사용하기 위함 */}
                      <CardContent> 
                        {item.content}
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