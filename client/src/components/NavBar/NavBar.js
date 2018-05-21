import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"; // NavBar CSS
import Logo from "./Logo.json"; // Hate&Date Logo

const NavBar = ({ loggedIn, logout }) => {

  return (

    <nav className="navbar navbar-expand-lg">

      {/* NavBar Logo */}
      <div className="navBarLogo">
        <Link to="/home">
          <img className="animated infinite pulse" id="logo"  src={Logo.imageUrl} alt={Logo.name} />
        </Link>
      </div>

      {/* NavBar Header */}
      <div className="navBarHeader">
        <h1 id="logoText" > Gripe</h1>
      </div>

      {/* NavBar Buttons */}
      <div className="navBarBtnWrapper">
        <ul className="navBarBtnList">
          {loggedIn ?
            [
              <li key="about"><Link to="/about"><button className="navBarBtn">About</button></Link></li>,
              <li key="feed"><Link to="/feed"><button className="navBarBtn">Feed</button></Link></li>,
              <li key="profile"><Link to="/profile"> <button className="navBarBtn">Profile</button></Link></li>,
              <li key="logout"><Link to="/"><button className="navBarBtn" onClick={logout}>Logout</button></Link></li>
            ]
            :
            [
              <li key="home"><Link to="/"><button className="navBarBtn">Home</button></Link></li>,
              <li key="about"><Link to="/about"><button className="navBarBtn">About</button></Link></li>,
              <li key="feed"><Link to="/feed"><button className="navBarBtn">Feed</button></Link></li>,
              <li key="profile"><Link to="/profile"> <button className="navBarBtn">Profile</button></Link></li>,
              <li key="login"><Link to="/login"> <button className="navBarBtn">Login</button></Link></li>
            ]
          }
        </ul>
      </div>


    </nav>

  ); // End of Return

}; // End of NavBar Component

export default NavBar;