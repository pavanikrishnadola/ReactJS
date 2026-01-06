import React from "react";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      personGoing:true,
      numberofpersons:5
    };
    this.handleInputChange=this.handleInputChange.bind(this);
  }
  handleInputChange(event){
    const target=event.target;
    const value=target.type==='checkbox'?target.checked:target.value;
    const name=target.name;
    this.setState({
      [name]:value
    });
  }
  render(){
    return(
      <form>
        <h1>Multiple Input Controlled form</h1>
        <label>
          Is Person Going:<input name="personGoing" type="checkbox" 
          checked={this.state.personGoing} onChange={this.handleInputChange}/>
        </label><br/>
        <label>
          Number of Persons:<input name="numberofpersons" type="number" 
          value={this.state.numberofpersons} onChange={this.state.handleInputChange}/>
        </label>
      </form>
    );
  }
}
export default App;
