
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      companyname: ""
    };
  }
  updateSubmit = (event) => {
    event.preventDefault();
    alert(
      `You have entered:
Username: ${this.state.username}
Company: ${this.state.companyname}`
    );
  };
  render() {
    return (
      <div>
        <form onSubmit={this.updateSubmit}>
          <label>
            UserName:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </label>
          <br />
          <label>
            CompanyName:
            <input
              type="text"
              name="companyname"
              value={this.state.companyname}
              onChange={(e) => this.setState({ companyname: e.target.value })}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default App;
