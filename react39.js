import React,{useState} from "react";
function App(){
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const handleLogin =() =>{
    setIsLoggedIn(true);
  };
  const handleLogout = () =>{
    setIsLoggedIn(false);
  };
  return(
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ):(
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};
export default App;
