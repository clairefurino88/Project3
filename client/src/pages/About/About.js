import React, { Component } from "react";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import DevCard from "../../components/DevCard";
import Team from "./Team.json"; // Developer Team Info
import "./About.css"; // About Page CSS

class App extends Component {
    state = {
        Team
    };
    render() { 
        return (
            <Wrapper>
                {this.state.Team.map(team => (
                    <DevCard
                        id={team.id}
                        name={team.name}
                        image={team.image}
                        email={team.email}
                        gitHub={team.gitHubUrl}
                        linkedIn={team.linkedInUrl}
                    />
                ))}

                <div className="twitterTimeline">
                    <a className="twitter-timeline" data-width="270" data-height="470" href="https://twitter.com/hate_and_date?ref_src=twsrc%5Etfw"> Follow us on Twitter </a>
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>


            </Wrapper>
        );
    }
}
export default App;


// Luis: Starter Code
// const About = () => (

//     <Wrapper>

/* 
        { const TeamList = Team.map((member) => {
        return (
           <div className="TeamList" key={member.id}>
            < div className="imageButton" onClick={confirmClick}>
                <img id={Team.id} src={Team.image} alt={Team.name} email={Team.email} >
                </div>
           
        </div>
        );
   });
   } */
/* <Row>
            <Col size="md" span="4">
                <DevCard />
            </Col>
            <Col size="md" span="4">
                <DevCard />
            </Col>
            <Col size="md" span="4">
                <DevCard />
            </Col>
        </Row>
        <Row>
            <Col size="md" span="4">
                <DevCard />
            </Col>
            <Col size="md" span="4">
                <DevCard />
            </Col>
        </Row> */






