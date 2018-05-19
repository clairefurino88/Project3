import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./SignUpForm.css"; // Sign-Up Form CSS
import API from "../../utils/API";

const SignUpForm = ({

  handleInputChange,
  handleSignUp,
  name,
  email,
  password,
  occupation,
  relationshipType,
  location,
  photoUrl,
  bio

}) => {

  return (

    <div className="signUpForm">

      <form onSubmit={handleSignUp}>
        <h1 className="signUpFormHeader">Sign Up Form</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input name="name" className="form-control" placeholder="Enter your name..." onChange={handleInputChange} value={name} type="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input name="email" className="form-control" placeholder="Enter your e-mail..." onChange={handleInputChange} value={email} type="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input name="password" className="form-control" placeholder="Enter a password..." onChange={handleInputChange} value={password} type="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation</label>
          <input name="occupation" className="form-control" placeholder="Enter your occupation..." onChange={handleInputChange} value={occupation} type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="relationshipType">Relationship Type</label>
          <input name="relationshipType" className="form-control" placeholder="What kind of relationship are you looking for?" onChange={handleInputChange} value={relationshipType} type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input name="location" className="form-control" placeholder="Location..." onChange={handleInputChange} value={location} type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="photoUrl">Profile Picture</label>
          <input name="photoUrl" className="form-control" placeholder="Photo Url..." onChange={handleInputChange} value={photoUrl} type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="bio">About You</label>
          <textarea name="bio" className="form-control" placeholder="Say something about yourself..." onChange={handleInputChange} value={bio} type="text" required />
        </div>
        <button className="signUpBtn" type="submit">Submit</button>
      </form>

    </div>

  );

};

export default SignUpForm;