import React,{Component} from "react";
class Counter extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    };
  }
  incrementCount =() => {
    this.setState((prevState) => ({
      count:prevState.count+1
    }));
  };
  decrementCount =() => {
    this.setState((prevState) => ({
      count:prevState.count-1
    }));
  };
  render(){
    return(
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}
export default Counter;
