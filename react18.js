import React, { useState, useEffect } from "react";

const App = () => {
  const [hello, setHello] = useState("Java");

  // ComponentDidMount
  useEffect(() => {
    console.log("Component Did MOUNT!");
  }, []);

  // ComponentDidUpdate
  useEffect(() => {
    console.log("Component Did UPDATE!");
  }, [hello]);

  // ComponentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Component Will UNMOUNT!");
    };
  }, []);

  const changeState = () => {
    setHello("ALL!! - It's great");
  };

  return (
    <div>
      <h1>React Component Lifecycle (React21-Hooks Version)</h1>
      <h3>Hello {hello}</h3>
      <button onClick={changeState}>Click Here!</button>
    </div>
  );
};

export default App;
