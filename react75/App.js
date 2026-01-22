import React,{Component} from "react";
import Hoc from "./HOC";
class App extends Component{
  render(){
    return(
      <div>
        Higher Order Component
      </div>
    )
  }
}
App=Hoc(App);
export default App;
