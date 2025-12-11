import React, { useRef } from "react";
const App = () => {
  const nodeRef = useRef(null);
  function find() {
    console.log(nodeRef.current);
    nodeRef.current.style.color = "green";
    nodeRef.current.style.fontSize = "x-large";
  }
  return (
    <>
      <div>
        <div id="node" ref={nodeRef}>DOM Node</div>
        <button onClick={find}>Click To Find</button>
      </div>
    </>
  );
};

export default App;
