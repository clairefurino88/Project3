import React from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import Mission from "../../components/Mission";
import SignUpForm from "../../components/SignUpForm";
import "./Home.css"; // Home Page CSS

class Home extends React.Component {

  state = {

    loggedIn: this.props.loggedIn,
    user: this.props.user,
    redirectTo: "",

    name: "",
    email: "",
    password: "",
    occupation: "",
    relationshipType: "",
    location: "",
    imageUrl: "",
    bio: ""

  }

  consoleLogProps = () => {
    console.log("Home > this.props: ", this.props);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  };

  handleSignUp = event => {
    event.preventDefault();
    API.signUp({ email: this.state.email, password: this.state.password })
      .then(() => this.setState({
        redirectTo: "/login"
      }));
  }

  render() {
    // Console.log Props
    this.consoleLogProps();
    if (this.state.redirectTo != "") {
      return <Redirect to={this.state.redirectTo} />
    }
    return (
      <Wrapper>
        <Row>
          <Col size="md" span="6">
            <Mission/>
          </Col>
          <Col size="md" span="6">
            <SignUpForm
              handleInputChange={this.handleInputChange}
              handleSignUp={this.handleSignUp}
              name={this.state.name}
              email={this.state.email}
              password={this.state.password}
              occupation={this.state.occupation}
              relationshipType={this.state.relationshipType}
              location={this.state.location}
              imageUrl={this.state.imageUrl}
              bio={this.state.bio}
            />
          </Col>
        </Row>
        {/* <video autoplay loop id="video-background" muted plays-inline>
        <source src={Video} type="video/mp4" />
      </video> */}
      </Wrapper>
    )
  }
}

export default Home;

// Original Franklin Starter Code
// const styles = {
//   header: {
//     color: "green",
//     borderStyle: "solid",
//     borderWidth: "1px",
//     textAlign: "center"
//   }
// }

// export default ({ loggedIn = false, user }) => {
//   return (
//     !loggedIn ?
//       <Wrapper>
//         <Row>
//           <Col offset={3}>
//             <h1>Home/Sign-Up Page</h1>
//             <br />
//             <h4>Rendering:</h4>
//             <h4><ol>
//               <li>Mission Statement</li>
//               <li>Sign-Up Form</li>
//             </ol>
//             </h4>
//           </Col>
//         </Row>
//       </Wrapper>
//       :
//       <Wrapper>
//         <Row>
//           <Col>
//             <h1 style={styles.header}>You are successfully logged in {user.email}!</h1>
//           </Col>
//         </Row>
//       </Wrapper>
//   );
// }
// 
// export default SignUpForm;