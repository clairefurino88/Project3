import React from "react";
import UserInfo from "../../components/UserInfo";
// import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import { Wrapper } from "../../components/BootstrapGrid";
import "./Profile.css"; // Profile Page CSS

const Profile = () => (

    <Wrapper>

        <UserInfo
            image="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Flmcdesign-rj6zcy7b8ypu79snuv.netdna-ssl.com%2Fwp-content%2Fuploads%2F2016%2F01%2FShrek_Tile-1-500x500.jpg&f=1"
            name="Bobby Billy-Boy"
            email="bobbybillyboy@gmail.com"
            occupation="Plumber"
            relationshipType="Long-term love"
            location="Newark, NJ"
            bio="I'm just a regular plumber, dawg." />

    </Wrapper>

);

export default Profile;