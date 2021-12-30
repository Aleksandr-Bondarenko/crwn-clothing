import React from "react";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2>I already an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
            required
          />
          <label>Email</label>
          <input
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            required
          />
          <label>Password</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
