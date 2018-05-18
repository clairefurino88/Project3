import React from "react";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import DevCard from "../../components/DevCard";
import Team from "./Team.json"; // Developer Team Info
import "./About.css"; // About Page CSS

// Luis: Starter Code
const About = () => (

    <Wrapper>
{/* 
        { const TeamList = Team.map((member) => {
        return (
           <div className="TeamList" key={member.id}>
            < div className="imageButton" onClick={confirmClick}>
                <img id={Team.id} src={Team.image} alt={Team.name} email={Team.email} >
                </div>
           
        </div>
        );
   });
   } */}

        <DevCard />
        <DevCard />
        <DevCard />
        <DevCard />

        <div class="col-md-4">
            <a class="twitter-timeline" data-width="270" data-height="470" href="https://twitter.com/hate_and_date?ref_src=twsrc%5Etfw"> Follow us on Twitter </a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

    </Wrapper>

);


export default About;