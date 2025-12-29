import React from "react";
import WelcomePage from './WelcomePage';
import UserProvider from "./Context";
const App = () =>{
  return(
    <UserProvider>
      <WelcomePage/>
    </UserProvider>
  );
};
export default App;
