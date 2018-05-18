import React from "react";
// import DevCard from "../../components/DevCard";
import UserInfo from "../../components/UserInfo";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import "./Profile.css"; // Profile Page CSS

// Luis: Starter Code
const Profile = () => (

    <Wrapper>

        {/* <h1>Profile Page</h1>
        <br />
        <h4>Route: '/profile'</h4>
        <h4>Rendering:
            <ol>
                <li>User Info</li>
                <li>All user posts</li>
            </ol>
        </h4> */}

    <UserInfo 
    image="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Flmcdesign-rj6zcy7b8ypu79snuv.netdna-ssl.com%2Fwp-content%2Fuploads%2F2016%2F01%2FShrek_Tile-1-500x500.jpg&f=1" 
    name="Bobby Billy-Boy"
    email="bobbybillyboy@gmail.com"
    occupation="Plumber"
    relationshipType="Long-term love"
    location="Newark, NJ"
    bio="I'm just a regular plumber, dawg."/>

    </Wrapper>

);

export default Profile;