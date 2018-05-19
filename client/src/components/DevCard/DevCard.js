import React from "react";
import { Col, Row, Wrapper } from "../BootstrapGrid";
import About from "../../pages/About";
import "./DevCard.css"; // Developer Card CSS

// Luis: Starter Code
const DevCard = props => (

            <div className="devCard">

                <div className="img-container">
                    <img alt={props.name} src={props.image} id="devCardImg" />
                </div>

                <div className="devContent">
                    <ul>
                        <li className="devList">
                            <strong>{props.name}</strong>
                        </li>
                        <a href={props.linkedIn} target="blank" id="devTag">
                            <i style={{ fontSize: "30px" }} className="fab fa-linkedin"></i>
                        </a>
                        <a href={props.gitHub} target="blank">
                            <i style={{ fontSize: "30px" }} class="fab fa-github"></i>
                        </a>
                        <li className="devList">
                            {props.email}
                        </li>
                    </ul>

                </div>

            </div>

);


export default DevCard;