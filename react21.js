import React,{useState} from "react";
const ExampleComponent =() => {
  const [count,setCount]=useState(0);
  const incrementCount= () =>{
    setCount(count+1);
  };
    return(
      <div>
        <h1>Hello,World!</h1>
        <p>Count:{count}</p>
        <button onClick={incrementCount}>Increment</button>
      </div>
    );
  }
export default ExampleComponent;
