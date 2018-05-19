import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./NavBar.css"; // NavBar CSS
import Logo from "./Logo.json"; // Hate&Date Logo

const NavBar = ({ loggedIn, logout }) => {

  return (

    <nav className="navbar navbar-expand-lg">

      {/* NavBar Logo */}
      <div className="navBarLogo">
        <Link to="/home">
          <img id="logo" className="animated infinite pulse" src={Logo.imageUrl} alt={Logo.name} />
        </Link>
      </div>

      {/* NavBar Header */}
      <div className="navBarHeader">
        <h1 id="logoText" className="animated infinite pulse"> Hate&Date</h1>
      </div>

      {/* NavBar Buttons */}
      <div className="navBarBtnWrapper">
        <ul className="navBarBtnList">
          {loggedIn ?
            <li><Link to="/logout"><button className="navBarBtn">Logout</button></Link></li>
            :
            [
              <li key="home"><Link to="/"><button className="navBarBtn">Home</button></Link></li>,
              <li key="about"><Link to="/about"><button className="navBarBtn">About</button></Link></li>,
              <li key="feed"><Link to="/feed"><button className="navBarBtn">Feed</button></Link></li>,
              <li key="login"><Link to="/login"> <button className="navBarBtn">Login</button></Link></li>,
              <li key="profile"><Link to="/profile"> <button className="navBarBtn">Profile</button></Link></li>
            ]
          }
        </ul>
      </div>

 
    </nav>

  ); // End of Return

}; // End of NavBar Component

export default NavBar;