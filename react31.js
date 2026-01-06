
import React,{Component} from "react";
class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.updateSubmit=this.updateSubmit.bind(this);
    this.input=React.createRef();
  }
  updateSubmit(event){
    alert('You have entered the UserName and CompanyName are successfully');
  event.preventDefault();
  }
  render()
  {
    return(
    <div>
    <form onSubmit={this.updateSubmit}>
      <label>
        UserName:
        <input type="text" ref={this.input}name="username"/></label><br></br>
      <label>CompanyName:<input type="text" name="companyname"/></label><br></br>
      <input type="submit" value="Submit"/>
    </form>
    </div>
  );
}
}
export default App;
