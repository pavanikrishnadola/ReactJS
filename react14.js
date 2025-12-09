import React from "react";
class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:[
        {"name":"Abhishek"},
        {"name":"Satish"},
        {"name":"Ajay"}
      ]
    }
  }
  render(){
    return(
      <div>
        <h1>Student Data</h1>
        <ul>
          {this.state.data.map((item)=><List data={item}/>)}
        </ul>
      </div>
    );
  }
}
class List extends React.Component{
  render(){
    return(
      <ul>
        <li>{this.props.data.name}</li>
      </ul>
    )
  }
}
export default App;
