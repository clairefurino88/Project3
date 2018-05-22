import React from "react";
import UserInfo from "../../components/UserInfo";
import Post from "../../components/Post";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import "./Profile.css"; // Profile Page CSS

const Profile = () => (

  <Wrapper>
    <Row>
        {/*  User Information Column */}
        <Col size="md" span="7">
            {/*  User Image */}
            <div className="userContainer">
                <div className="userTitle">About Me</div>
                <UserInfo
                    image="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Flmcdesign-rj6zcy7b8ypu79snuv.netdna-ssl.com%2Fwp-content%2Fuploads%2F2016%2F01%2FShrek_Tile-1-500x500.jpg&f=1"
                    name="Don the Boss"
                    email="bobbybillyboy@gmail.com"
                    occupation="Plumber"
                    relationshipType="Long-term love"
                    location="Newark, NJ"
                    bio="I'm just a regular plumber, dawg." />
            </div>
        </Col>

            {/* Empty Column */}
            <Col size="md" span="1"> </Col>

            {/* User's feed post Column */}
            <Col size="md" span="4">
                <Post
                    comment="User's feed post"
                    category="Traffic"
                />
            </Col>
        
        </Row>

    </Wrapper>

); // End of Profile()

export default Profile;

