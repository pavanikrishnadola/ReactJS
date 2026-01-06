
import React,{useRef} from "react";
function App(){
  const usernameRef=useRef();
  const companyRef=useRef();
  const updateSubmit=(event)=>{
    event.preventDefault();
    alert("You have entered the UserName and CompanyName Successfully");
    console.log("Username:",usernameRef.current.value);
    console.log("Company:",companyRef.current.value);
  };
  return(
    <div>
      <form onSubmit={updateSubmit}>
        <label>
          UserName:
          <input type="text" ref={usernameRef} name="username"/>
        </label>
        <br/>
        <label>
          CompanyName:
          <input type="text" ref={companyRef} name="companyname"/>
        </label>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}
export default App;
