import React from "react"
import { Link, Redirect } from "react-router-dom"
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import API from "../../utils/API";
import Video from "./video_background.json";
import "./Login.css"; // Login Page CSS

class Login extends React.Component {
  
  state = {
    email: "",
    password: "",
    redirectTo: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  };

  handleLogin = event => {
    event.preventDefault();
    API.login({ email: this.state.email, password: this.state.password })
      .then((res) => {
        console.log("RES.data", res.data);
        this.props.setUser(res.data)
        this.setState({
          redirectTo: "/feed"
        });
      });
  }

  render() {

    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    }

    return (

      <Wrapper>
        <Row>
          <Col size="md" span="3"></Col>
          <Col size="md" span="6">
            <div className="loginForm">
              <h2 id="loginFormHeader">Login Form</h2>
              <form onSubmit={this.handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input name="email" className="form-control" type="text" value={this.state.email} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input name="password" className="form-control" type="password" value={this.state.password} onChange={this.handleInputChange} />
                </div>
                <button className="loginBtn" type="submit">Login</button>
              </form>
              <br />
              <Link to="/"><p>Or Sign Up Here</p></Link>
            </div>
            {/* <video autoplay loop id="video-background" muted plays-inline>
            <source src={Video.videoUrl}
            type="video/mp4" />
            </video> */}
          </Col>
        </Row>
      </Wrapper>

    ); // End of Return

  }; // End of render()

}; // End of Class Login Component

export default Login;