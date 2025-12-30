import React,{Component} from "react";
class ScrollToElement extends Component{
  constructor(props){
    super(props);
    this.myRef=React.createRef();
  };
  handleClick = () => {
    this.myRef.current.scrollIntoView({behavior:'smooth'});
  }
  render(){
    return(
      <div>
        <button onClick={this.handleClick}>Scroll To Element</button>
        <div style={{height:'1500px'}}></div>
        <div ref={this.myRef} style={{height:'100px',background:'yellow'}}>Scroll To This Element</div>
      </div>
    );
  }
}
export default ScrollToElement;
