import React from "react";
class App extends React.Component{
  constructor(){
    super();
    this.state={
      msg:"Welcome"
    };
    this.updateSetState=this.updateSetState.bind(this);
  }
  updateSetState(){
    this.setState({
      msg:"You Are Best"
    });
  }
  render(){
    return(
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.updateSetState}>SET STATE</button>
      </div>
    );
  }
}
export default App;
