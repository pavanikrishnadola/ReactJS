import React from "react";
import styled from "styled-components";
function App(){
  const Div = styled.div`
  margin: 20px;
  border: 5px dashed green;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
const Title=styled.h1`
font-family:Arial;
font-size:35px;
text-align:center;
color:palevioletred;
`;
const Paragraph=styled.p`
font-size:25px;
text-align:center;
background-color:lightgreen;
`;
return(
  <div>
    <Title>Styled components Example</Title>
    <p></p>
    <Div hoverColor="Orange">
      <Paragraph>Hello</Paragraph>
    </Div>
  </div>
);
}
export default App;
