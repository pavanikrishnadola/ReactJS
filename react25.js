import React,{useState} from "react";
function App(){
  const [count,setCount]=useState(0);
  return(
    <div className="App">
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  );
}
export default App;
