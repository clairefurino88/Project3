import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"; // NavBar CSS
import Logo from "./Logo.json"; // Hate&Date Logo

const NavBar = ({ loggedIn, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <ul>
        <li key="home" className="nav-item">
          <Link className="nav-item nav-link" to="/home">Home - Sign Up</Link>
        </li>
      </ul> */}
      {/* Original Franklin Code... */}
      <div class="row">
        <div class="col-md-8">
          <div class="navbar-header" id="login-navbar-header">
            <a class="navbar-brand">
              <Link to="/login">
                <div>
                  <img class="animated infinite pulse" id="logo" src={Logo.imageUrl} alt={Logo.name} />
                </div>
              </Link>
            </a>
            <h1 style={{ color: "white" }} class="logo-text animated infinite pulse "> Hate&Date</h1>
          </div>
        </div>
        {/* <div class="col-md-3">
          <div class="text-right">
            <a>
              <Link to="/login">
                <button type="button" class="btn"> Login </button>
              </Link>
            </a>
            <a>
              <Link to="/about">
                <button type="button" class="btn">About Us</button>
              </Link>
            </a>
          </div>
        </div> */}
        <div class="col-md-1"></div>
      </div>

      <Link to="/"><button type="button" class="btn"> Home - Sign Up</button></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {loggedIn ?
            <li className="nav-item">
              <a className="nav-item nav-link" href="#" onClick={logout}>Logout</a>
            </li>
            :
            [
              // Original Franklin Code...
              // <li key="signup" className="nav-item">
              //   <Link className="nav-item nav-link" to="/signup">Signup</Link>
              // </li>,
              // Luis: Updated code...
              <li key="about" className="nav-item">
                <Link className="nav-item nav-link" to="/about"><button type="button" class="btn"> About </button></Link>
              </li>,
              <li key="feed" className="nav-item">
                <Link className="nav-item nav-link" to="/feed"><button type="button" class="btn"> Feed </button></Link>
              </li>,
              <li key="profile" className="nav-item">
                <Link className="nav-item nav-link" to="/profile"> <button type="button" class="btn"> Profile </button></Link>
              </li>,
              <li key="login" className="nav-item">
                <Link className="nav-item nav-link" to="/login"> <button type="button" class="btn"> Login </button></Link>
              </li>
            ]
          }
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;