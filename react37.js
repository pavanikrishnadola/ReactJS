import React from "react";
class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.state={isLoggedIn :false};
    this.handleLoginClick=this.handleLoginClick.bind(this);
    this.handleLogoutClick=this.handleLogoutClick.bind(this);
  }
  handleLoginClick(){
    this.setState({isLoggedIn: true});
  }
  
}
