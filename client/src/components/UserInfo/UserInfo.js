import React from "react";
import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./UserInfo.css"; // Profile Page User Info CSS

// Luis: Starter Code
const UserInfo = ({image, name, email, occupation, relationshipType, location, bio}) => (

    <Wrapper>
        <div style={{
        backgroundColor:'grey', 
        borderRadius:'2%'}} className="userDiv">
        <br />
        <strong style={{
        paddingLeft:'5px', 
        fontSize:'14px', 
        color:'white',
        background:'linear-gradient(to bottom right, #e1000e, black)',
        display:'block',
        boxShadow:'0 2px 4px 0 rgba(38, 47, 42, 1), 0 6px 15px 0 rgba(0, 0, 0, 0.19',
        padding:'10px 15px',
        borderBottom:'1px solid transparent',
        borderTopRightRadius:'3px',
        borderTopLeftRadius:'3px'}}>About Me</strong>
        <br />
        <br />
        <img style={{ 
        maxWidth:'300px', 
        maxHeight:'300px', 
        minWidth:'300px', 
        minHeight:'300px', 
        display:'block', 
        margin:'auto',
        border:'3px solid #ffffff',
        boxShadow:'3-x 4px',
        borderRadius:'0% 10% 0% 10%'}} src={image} />
        <br />
        <br />
        <strong style={{
        paddingLeft:'5px'}}>Name:</strong> <p style={{color:'white', 
        paddingLeft:'5px', marginBottom:'0', fontSize:'17px'}}>{name}</p>
        <br />
        <strong style={{
        paddingLeft:'5px'}}>Email:</strong> <p style={{color:'white', 
        paddingLeft:'5px', marginBottom:'0', fontSize:'17px'}}>{email}</p>
        <br />
        <strong style={{
        paddingLeft:'5px'}}>Occupation:</strong> <p style={{color:'white', 
        paddingLeft:'5px', marginBottom:'0', fontSize:'17px'}}>{occupation}</p>
        <br />
        <strong style={{
        paddingLeft:'5px'}}>Looking for:</strong> <p style={{color:'white', 
        paddingLeft:'5px', marginBottom:'0', fontSize:'17px'}}>{relationshipType}</p>
        <br />
        <strong style={{
        paddingLeft:'5px'}}>Location:</strong> <p style={{color:'white', 
        paddingLeft:'5px', marginBottom:'0', fontSize:'17px'}}>{location}</p>
        <br />
        <strong style={{
        paddingLeft:'5px'}}>Bio:</strong> <p style={{color:'white', 
        paddingLeft:'5px', marginBottom:'0', fontSize:'17px'}}>{bio}</p>
        </div>
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

    </Wrapper>

);

export default UserInfo;