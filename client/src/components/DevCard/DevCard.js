import React from "react";
import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./DevCard.css"; // Developer Card CSS

// Luis: Starter Code
const DevCard = () => {
    return (
        <Wrapper>
            <div className="card">
                <div className="img-container">
                    <img alt= "bob" src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX7470436.jpg" />
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <strong>Name:</strong> bob 
                        </li>
                        <li>
                            <strong>Occupation:</strong> jobless
                        </li>
                        <li>
                            <strong>LinkedIn:</strong> linkedin links
                        </li>
                    </ul>
                </div>
            </div>
        </Wrapper>

    );
}


export default DevCard;