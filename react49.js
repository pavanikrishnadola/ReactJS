import React,{useCallback} from "react";
const ScrollToElement = () =>{
  let myRef=null;
  const setRef=useCallback(element => {
    if(element){
      myRef=element;
    }
  },[]);
  const handleClick = () => {
    if(myRef){
      myRef.scrollIntoView({behavior:'smooth'});
    }
  };
  return(
    <div>
      <button onClick={handleClick}>Scroll To Element</button>
      <div style={{height:'1500px'}}></div>
      <div ref={setRef} style={{height:'100px',background:'yellow'}}>Scroll To This Element</div>
    </div>
  )
}
export default ScrollToElement;
