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
    photoUrl: "",
    bio: ""

  }

  consoleLogProps = () => {
    console.log("Home > this.props: ", this.props);
  };

  handleInputChange = event => {
    console.log("handleInputChange 'event.target': ", event.target);
    const { name, value } = event.target;
    this.setState({ [name]: value })
  };

  handleSignUp = event => {
    event.preventDefault();
    API.signUp({
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      occupation: event.target.occupation.value,
      relationshipType: event.target.relationshipType.value,
      location: event.target.location.value,
      imageUrl: event.target.photoUrl.value,
      bio: event.target.bio.value
    })
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
            <Mission />
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
              photoUrl={this.state.photoUrl}
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