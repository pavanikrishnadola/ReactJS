import React,{Component} from "react";\
class MyApp extends Component{
  render(){
    return(
      <div>
      <p className={MyApp}>{2+2}</p>
      <p className={MyApp}>{5+4}</p>
      <p className={MyApp}>{5+7}</p>
      </div>
    );
  }
}
export default MyApp;
