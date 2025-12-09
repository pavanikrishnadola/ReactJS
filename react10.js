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
      si=(p*t*r)/100;
      return<p>{si}</p>
  }
}
export default App;
