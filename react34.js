import React,{Component} from "react";
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      username:"",
      companyname:""
    };
  }
  updateSubmit=(event)=>{
    event.PreventDefault();
    alert(`You have entered:\n Username: ${this.state.username} \n Company:${this.state.companyname}`);
  }
  render(){
    return(
      <div>
        <form onSubmit={this.updateSubmit}>
          <label>
            UserName:<input type="text" name="username" 
            value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}/>
          </label><br/>
          <label>
            CompanyName:<input type="text" name="companyname" value={this.state.companayname} 
            onChange={(e)=>this.setState({companayname:e.target.value})}/>
          </label>
        </form>
      </div>
    );
  }
}
export default App;
