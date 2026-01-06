function App() {
return <MySum a={5} b={3}/>;
}
function MySum(props) {
  return (
    <p>
     Addition={props.a+props.b}<br></br>
     Subtraction={props.a-props.b}<br></br>
     Multilication={props.a*props.b}<br></br>
     Division={props.a/props.b}<br></br>
     Modulus={props.a%props.b}<br></br>
     Exponentation={props.a**props.b}<br></br>
    </p>
  );
}
export default App;
