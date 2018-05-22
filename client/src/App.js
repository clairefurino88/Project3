import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./utils/API";
import { NavBar } from "./components";
import { About, Feed, Home, Login, Profile } from "./pages"

class App extends React.Component {

  state = {
    loggedIn: false,
    user: null,
    email: "",
    password: ""
  }

  setUser = (user) => {
    console.log("setUser() 'user': ", user);
    this.setState({
      user,
      loggedIn: true
    });
  };

  handleLogout = () => {
    API.logout()
      .then(() => {
        this.setState({
          user: null,
          loggedIn: false
        });
      });
  };

  componentDidMount() {
    API.getLoggedOnUser()
      .then(res => {
        console.log("App.js componentDidMount() 'res.data': ", res.data);
        this.setState({
          user: res.data.user,
          loggedIn: res.data.user || false
        })
      })
  }

  render() {

    return (

      <Router>
        <div>
          <NavBar loggedIn={this.state.loggedIn} logout={this.handleLogout} />
          <Route exact path="/" render={() => <Home loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/about" render={() => <About loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/feed" render={() => <Feed loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/home" render={() => <Home loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser} loggedIn={this.state.loggedIn} user={this.state.user} />} />
          <Route exact path="/profile" render={() => <Profile loggedIn={this.state.loggedIn} user={this.state.user} />} />
          {/* Other Original Franklin Routes
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser} />} /> */}
        </div>
      </Router>

    ); // End of return()

  }; // End of render()

}; // End of App.js class component

export default App;