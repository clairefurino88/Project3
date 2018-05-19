import React from "react"
import { Redirect } from "react-router-dom"
// import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import API from "../../utils/API";
import Video from "./video_background.json";
import "./Login.css"; // Login Page CSS

// const styles = {
//   header: {
//     color: "purple",
//     borderStyle: "solid",
//     borderWidth: "1px",
//     textAlign: "center"
//   }
// }

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
        console.log("RES", res);
        this.props.setUser(res.data)
        this.setState({
          redirectTo: "/"
        });
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    }
    return (
      <div>
        <div className="container content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 login-form">
              <h2>Login Form</h2>
              <form className="login" onSubmit={this.handleSubmitForm}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input className="form-control" id="password-input" name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input className="form-control" id="password-input" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                </div>
                <button className="btn btn-login" onClick={this.handleLogin}>Login</button>
              </form>
              <br />
              <a href="/">
                <p><u>Or Sign Up Here</u></p>
              </a>
              <br />
            </div>
          </div>
        </div>
        {/* <video autoplay loop id="video-background" muted plays-inline>
          <source src={Video.videoUrl}
            type="video/mp4" />
        </video> */}
      </div>
      // <Wrapper>
      //   <Row>
      //     <Col>
      //       <h1>Login Form</h1>
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col span={2} offset={3}>
      //       <label>Email: </label>
      //     </Col>
      //     <Col span={3}>
      //       <input name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col span={2} offset={3}>
      //       <label>Password: </label>
      //     </Col>
      //     <Col span={4}>
      //       <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col span={2} offset={3}>
      //       <button onClick={this.handleLogin}>Submit</button>
      //     </Col>
      //   </Row>
      // </Wrapper>
      );
  }
}

export default Login;