import React from "react";
function App(){
  const mystyle={
    color:"Green",
    backgroundColor:"lightgreen",
    padding:"10px",
    fontFamily:"Arial"
  };
  return(
    <div>
      <h1 style={mystyle}>Hello!</h1>
      <p>Here, you can find all css</p>
    </div>
  );
}
export default App;
