import React,{useRef} from "react";
const ScrollToElement = () =>{
  const myRef = useRef(null);
  const handleClick = () =>{
    myRef.current.scrollIntoView({behavior:'smooth'});
  };
  return(
    <div>
      <button onClick={handleClick}>Scroll To Element</button>
      <div style={{height:'1500px'}}></div>
      <div ref={myRef} style={{height:'100px',background:'orange'}}>
        Scroll To The Element
      </div>
    </div>
  )
}
export default ScrollToElement;
