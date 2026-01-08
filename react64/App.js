import React,{useState,createRef} from "react";
import { TransitionGroup,CSSTransition } from "react-transition-group";
import './style.css'

const App=()=>{
  const [items,setItems]=useState([
    'Blockchain','ReactJS','Typecsript','Java'
  ]);
  const [nodeRefs,setNodeRefs]=useState({ });
  const handleAdd=()=>{
    const newItem=prompt('Enter Item Name');
    if(newItem && !items.includes(newItem)){
      setItems(prev=>[...prev,newItem]);
      setNodeRefs(prev=>({
        ...prev,
        [newItem]:createRef()
      }));
    }
  };
  const handleRemove=(index)=>{
    const removedItem=items[index];
    setItems(prev=>prev.filter((_,i)=>i !==index));
    setNodeRefs(prev=>{
      const updated=[...prev];
      delete updated[removedItem];
      return updated;
    });
  };
  return(
    <div>
      <h1>Animation Example</h1>
      <button onClick={handleAdd}>Insert Item</button>
      <TransitionGroup>
        {items.map((item,index)=>(
          <CSSTransition
          key={item}
          timeout={500}
          classNames="example"
          nodeRef={nodeRefs[item]}>
            <div
            ref={nodeRefs[item]}
            onClick={()=>handleRemove(index)}
            style={{cursor:'pointer'}}>
              {item}
              </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}
export default App;
