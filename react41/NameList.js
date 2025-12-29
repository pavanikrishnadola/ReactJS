import React from "react";
const NameList = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'David'];
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};
export default NameList;
