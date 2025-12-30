import React from "react";
class LoginLogoutButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };
  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        {!isLoggedIn && (
          <button onClick={this.handleLogin}>Login</button>
        )}
        {isLoggedIn && (
          <button onClick={this.handleLogout}>Logout</button>
        )}
      </div>
    );
  }
}
export default LoginLogoutButtons;
