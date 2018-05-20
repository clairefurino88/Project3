import React, { Component } from "react";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import DevCard from "../../components/DevCard";
import Twitter from "../../components/Twitter";
import Team from "./Team.json"; // Developer Team Info
import "./About.css"; // About Page CSS

const About = () => {

    return (

        <Wrapper>

            <Row>
                <Col size="md">
                    <h1 className="devText">Meet the Team</h1>
                </Col>
            </Row>

            <Row>
                {/* Developer Card Column */}
                <Col size="md" span="7">
                    {Team.map(team => (
                        <DevCard
                            key={team.id}
                            id={team.id}
                            name={team.name}
                            image={team.image}
                            email={team.email}
                            gitHub={team.gitHubUrl}
                            linkedIn={team.linkedInUrl}
                        />
                    ))}
                </Col>

                {/* Empty Column */}
                <Col size="md" span="1"> </Col>

                <Col size="md" span="4">
                    <Twitter />
                </Col>

            </Row>

        </Wrapper>

    ); // End of return()

}; // End of About.js functional component

export default About;