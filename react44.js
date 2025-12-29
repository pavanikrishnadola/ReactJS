import React,{useState} from "react";
const ItemList = () =>{
  const [items,setItems]=useState([
    {id: 1,name:'Apple'},{id:2,name:'Banana'},{id:3,name:'Cherry'}
  ]);
  const addItem = () =>{
    const newItem={id:items.length+1,name:`Item ${items.length + 1}`};
    setItems([...items,newItem]);
  };
  return(
    <div>
      <ul>
        {items.map(item =>(
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};
export default ItemList;
