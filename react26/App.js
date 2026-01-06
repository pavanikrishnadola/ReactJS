function App() {
  return (
    <Greeting 
      name="Bharath" 
      age={45} 
      occupation="Software Developer"/>
  );
}
function Greeting(props) {
  return (
    <p>
      Hello! I am {props.name}, a {props.age} years old {props.occupation}.
      Nice to meet you!
    </p>
  );
}
export default App;
