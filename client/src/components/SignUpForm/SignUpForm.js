import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Col, Row, Wrapper } from "../BootstrapGrid"
import "./SignUpForm.css"; // Sign-Up Form CSS
import API from "../../utils/API";
const styles = {
  header: {
    color: "orange",
    borderStyle: "solid",
    borderWidth: "1px",
    textAlign: "center"
  }
}

const SignUpForm = ({
  handleInputChange,
  handleSignUp,
  name,
  email,
  password,
  occupation,
  relationshipType,
  location,
  imageURL,
  bio
}) => {

  return (

    <div>
      <h1>Signup</h1>
      <form className="signup" onSubmit={this.handleSignup}>
        <div className="form-group">
          <label for="name">Name</label>
          <input name="name" className="form-control" placeholder="Enter your name..." onChange={this.handleInputChange} value={name} type="name" required />
        </div>
        <div className="form-group">
          <label for="email">E-mail</label>
          <input name="email" className="form-control" placeholder="Enter your e-mail..." onChange={this.handleInputChange} value={email} type="email" required />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input name="password" className="form-control" placeholder="Enter a password..." onChange={this.handleInputChange} value={password} type="password" required />
        </div>
        <div className="form-group">
          <label for="occupation">Occupation</label>
          <input name="occupation" className="form-control" placeholder="Enter your occupation..." onChange={this.handleInputChange} value={occupation} type="text" required />
        </div>
        <div className="form-group">
          <label for="relationshipType">Relationship Type</label>
          <input name="relationshipType" className="form-control" placeholder="What kind of relationship are you looking for?" onChange={this.handleInputChange} value={relationshipType} type="text" required />
        </div>
        <div className="form-group">
          <label for="location">Location</label>
          <input name="location" className="form-control" placeholder="Location..." onChange={this.handleInputChange} value={location} type="text" required />
        </div>
        <div className="form-group">
          <label for="imageUrl">Profile Picture</label>
          <input name="imageUrl" className="form-control" placeholder="Image Url..." onChange={this.handleInputChange} value={imageURL} type="text" required />
        </div>
        <div className="form-group">
          <label for="bio">About You</label>
          <textarea name="bio" className="form-control" placeholder="Say something about yourself..." onChange={this.handleInputChange} value={bio} type="text" required />
        </div>
        <button>Submit</button>
      </form>
    </div>

  );

};

export default SignUpForm;

// Original Franklin Starter Code...

// class SignUpForm extends Component {
//   state = {
//     redirectTo:"",
//     email: "",
//     password: ""
//   }

//   handleInputChange = event => {
//     const {name, value} = event.target;
//     this.setState({[name]: value})
//   };

//   handleSignUp = event => {
//     event.preventDefault();
//     API.signUp({ email: this.state.email, password: this.state.password})
//     .then(() => this.setState({
//       redirectTo: "/login"
//     }));
//   }

//   render(){
//     if(this.state.redirectTo){
//       return <Redirect to={this.state.redirectTo} />
//     }
//     return (
//       <Wrapper>
//         <Row>
//           <Col>
//             <h1 style={styles.header}>Signup Form</h1>
//           </Col>
//         </Row>
//         <Row>
//           <Col span={2} offset={3}>
//             <label>Email: </label>
//           </Col>
//           <Col span={3}>
//             <input name="email" type="text" value={this.state.email} onChange={this.handleInputChange} />
//           </Col>
//         </Row>
//         <Row>
//           <Col span={2} offset={3}>
//             <label>Password: </label>
//           </Col>
//           <Col span={4}>
//             <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
//           </Col>
//         </Row>
//         <Row>
//           <Col span={2} offset={3}>
//             <button onClick={this.handleSignUp}>Submit</button>
//           </Col>
//         </Row>
//       </Wrapper>
//     )
//   }
// }

// export default SignUpForm;