
import React from "react";
import propTypes from "prop-types";
class App extends React.Component{
  render(){
    return(
      <div>
        <table>
          <tr>
            <th>Type</th>
            <th>Value</th>
            <th>Valid</th>
          </tr>
          <tr>
            <td>Array</td>
            <td>{this.props.propArray}</td>
            <td>{this.props.propArray ?"true":"false"}</td>
          </tr>
          <tr>
            <td>Boolean</td>
            <td>{this.props.propBool ?"true":"false"}</td>
            <td>{this.props.propBool ?"true":"false"}</td>
          </tr>
          <tr>
            <td>Function</td>
            <td>{this.props.propFunc(5)}</td>
            <td>{this.props.propFunc ?"true":"false"}</td>
          </tr>
          <tr>
            <td>String</td>
            <td>{this.props.propString}</td>
            <td>{this.props.propString ?"true":"false"}</td>
          </tr>
          <tr>
            <td>Number</td>
            <td>{this.props.propNumber}</td>
            <td>{this.props.propNumber ?"true":"false"}</td>
          </tr>
        </table>
      </div>
    );
  }
}
App.propTypes={
  propArray:propTypes.array.isRequired,
  propBool:propTypes.bool.isRequired,
  propFunc:propTypes.func.isRequired,
  propNumber:propTypes.number.isRequired,
  propString:propTypes.string.isRequired,
}
App.defaultProps={
  propArray:[1,2,3,4,5],
  propBool:true,
  propFunc:function(x){return x+5},
  propNumber:1,
  propString:"Java"
}
export default App;
