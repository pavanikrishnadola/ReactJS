import React from "react";
import styles from './mystyles.module.css';
class App extends React.Component{
  render(){
    return(
      <div>
        <h1 className={styles.mystyle}>Hello Java</h1>
        <p className={styles.parastyle}>It provides great css</p>
      </div>
    );
  }
}
export default App;
