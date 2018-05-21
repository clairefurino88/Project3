import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import DevCard from "../../components/DevCard";
import Twitter from "../../components/Twitter";
import Team from "./Team.json"; // Developer Team Info
import "./About.css"; // About Page CSS
import twit from "../../components/Twitter/twit.png";
import instagram from "../../components/Twitter/insta.png";
import fb from "../../components/Twitter/fb.png";
import gith from "../../components/Twitter/gith.png";
<img src={require("../../components/Twitter/twit.png")} />


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
<div className="socialStyle">
                    <Link to="https://twitter.com/hate_and_date" target="_blank"

                        className="twitter-timeline" data-width="270" data-height="470">
                        <img width={100} height={100} alt="" src={twit} />
                    </Link>


                    <Link to="https://twitter.com/hate_and_date" target="_blank"

                        className="twitter-timeline" data-width="270" data-height="470">
                        <img width={100} height={100} alt="" src={instagram} />
                    </Link>

                    <Link to="https://twitter.com/hate_and_date" target="_blank"

                        className="twitter-timeline" data-width="270" data-height="470">
                        <img width={100} height={100} alt="" src={fb} />
                    </Link>

                    <Link to="https://twitter.com/hate_and_date" target="_blank"

                        className="twitter-timeline" data-width="270" data-height="470">
                        <img width={100} height={100} alt="" src={gith} />
                    </Link>
            </div>

                </Col>

            </Row>

        </Wrapper>

    ); // End of return()

}; // End of About.js functional component

export default About;