import React,{useState} from "react";
import './App.css';
function App(){
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confpassword,setConfpassword]=useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleConfpasswordChange = (e) => {
    setConfpassword(e.target.value);
  }
  const handleSubmit = (e) =>{
    if(password!==confpassword){
      alert("password not match")
    }
    else{
      alert("A form was submitted with Name: " + name + ", Age: " + age + " & Email: " + email);
    }
    e.presentDefault();
  }
  return(
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) =>{handleSubmit(e)}}>
          <h3>Sign-Up Form</h3>
          <label>Name:</label><br/>
          <input type="text" value={name} required onChange={(e) => {handleNameChange(e)}}/><br/>
          <label>Age:</label><br/>
          <input type="number" value={age} required onChange={(e) => {handleAgeChange(e)}}/><br/>
          <label>Email:</label><br/>
          <input type="email" value={email} required onChange={(e) => {handleEmailChange(e)}}/><br/>
          <label>Password:</label><br/>
          <input type="password" value={password} required onChange={(e) => {handlePasswordChange(e)}}/><br/>
          <label>Confirm Password:</label><br/>
          <input type="password" value={confpassword} required onChange={(e) => {handleConfpasswordChange(e)}}/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </header>
    </div>
  );
}
export default App;
