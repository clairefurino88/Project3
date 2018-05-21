import React from "react";
import { Link } from "react-router-dom";
// import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./Twitter.css"; // Twitter Feed CSS

// Luis: Starter Code
const Twitter = () => (

    <div className="twitterTimeline">
        <Link to="https://twitter.com/hate_and_date?ref_src=twsrc%5Etfw"
            className="twitter-timeline" data-width="270" data-height="470">Follow us on Twitter</Link>
        {/* <a className="twitter-timeline" data-width="270" data-height="470" href="https://twitter.com/hate_and_date?ref_src=twsrc%5Etfw"> Follow us on Twitter </a> */}
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>

);

export default Twitter;