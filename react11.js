import React,{Component} from "react";
class App extends Component{
  render(){
    return(
      <div>
        <SI/>
      </div>
    );
  }
}
class SI extends Component{
  render(){
      var p=5000;
      var t=2;
      var r=5;
      var si;
      var x;
      si=(p*t*r)/100;
      x=p*(Math.pow(1+r/100,t))
      return<p>{si},{x}</p>
  }
}
export default App;
