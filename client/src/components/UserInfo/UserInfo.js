import React from "react";
import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./UserInfo.css"; // Profile Page User Info CSS

// Luis: Starter Code
const UserInfo = ({ image, name, email, occupation, relationshipType, location, bio }) => (

        <div className="userDiv">

        <div className="userTitle">About Me</div>
        <br />
        
        <img className="userImg" src={image} />

        <p className="userInfo" > Name: </p> <p className="userData"> {name} </p>

        <p className="userInfo" > Email: </p> <p className="userData"> {email} </p>

        <p className="userInfo" > Occupation: </p> <p className="userData">{occupation} </p>

        <p className="userInfo" > Relationship Type: </p> <p className="userData">{relationshipType}</p>

        <p className="userInfo" > Location: </p> <p className="userData">{location}</p>

        <p className="userInfo" > Bio: </p> <p className="userData">{bio}</p>

    </div>

);

export default UserInfo;

{/* <h1>Profile Page User Info</h1>
        <br />
        <h4>Route: '/profile'</h4>
        <h4>Rendering Logged On User Info:
            <ol>
                <li>Image</li>
                <li>Name</li>
                <li>Email</li>
                <li>Occupation</li>
                <li>Relationship Type</li>
                <li>Location</li>
                <li>Bio</li>
            </ol>
        </h4> */}