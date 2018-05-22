import React from "react";
// import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./UserInfo.css"; // Profile Page User Info CSS

const UserInfo = ({ image, name, email, occupation, relationshipType, location, bio }) => (

    <div className="userDiv">

        <div className="userTitle">About Me</div>
        <br />

        <img className="userImg" src={image} alt="userprofilephoto" />
        <p className="userInfo" > Name: </p> <p className="userData"> {name} </p>
        <p className="userInfo" > Email: </p> <p className="userData"> {email} </p>
        <p className="userInfo" > Occupation: </p> <p className="userData">{occupation} </p>
        <p className="userInfo" > Relationship Type: </p> <p className="userData">{relationshipType}</p>
        <p className="userInfo" > Location: </p> <p className="userData">{location}</p>
        <p className="userInfo" > Bio: </p> <p className="userData">{bio}</p>
  
  </div>

); // End of UserInfo()

export default UserInfo;

//     <Row>
//         <Col size="md" span="6">
//             <br />
//             <img className="userImg" src={image} />
//         </Col>
//         <Col size="md" span="6">
//             <br />
//             <p className="userInfo" > Name: </p> <p className="userData">{name}</p>
//             <p className="userInfo" > Email: </p> <p className="userData">{email}</p>
//             <p className="userInfo" > Occupation: </p> <p className="userData">{occupation} </p>
//             <p className="userInfo" > Relationship Type: </p> <p className="userData">{relationshipType}</p>
//             <p className="userInfo" > Location: </p> <p className="userData">{location}</p>
//             <p className="userInfo" > Bio: </p> <p className="userData">{bio}</p>
//         </Col>
//     </Row>