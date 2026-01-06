
import React from "react";
import propTypes from "prop-types";
class Sum extends React.Component{
    render(){
        return<p>The Sum of {this.props.num1}and{this.props.num2}is{parseInt(this.props.num1)+parseInt(this.props.num2)}</p>
    }
}
    Sum.propTypes={
        num1:propTypes.number,
        num2:propTypes.number,
};
export default Sum;
