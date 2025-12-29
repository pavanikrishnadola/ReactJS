import React,{useState} from "react";
const App = () =>{
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const handleLogin = () =>{
    setIsLoggedIn(true);
  };
  const handleLogot = () =>{
    setIsLoggedIn(false);
  };
  const renderButton = (status) =>{
    switch(status) {
      case true:
        return <button onClick={handleLogot}>Logout</button>
        case false:
          return<button onClick={handleLogin}>Login</button>
          default:
            return null;
    }
  };
  return(
    <div>
      {renderButton(isLoggedIn)}
    </div>
  );
};
export default App;
