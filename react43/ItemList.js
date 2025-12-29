import React from "react";
const ItemList = () =>{
  const items=[
    {id: 1, name: 'Apple'},{id: 2, name: 'Banana'},{id: 3,name: 'Cherry'}
    ];
  return(
    <ul>
  {items.map(item => (
    <li key={item.id}>{item.name}</li>
))}
  </ul>
);
};
export default ItemList;
