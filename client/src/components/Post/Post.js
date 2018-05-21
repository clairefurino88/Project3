import React from "react";
import { Col, Row } from "../BootstrapGrid";
import "./Post.css"; // User Post CSS

const Post = ({ image, name, category, timeStamp, comment }) => (

    <div>
        <div className="postContainer">
            <p id="liveFeedTitle" className="hate-feed">Hate Feed</p>
            <p id="share">Share your story...</p>
            {/* <Row> */}
            {/* <Col size="md" span="6"> */}
            <div className="panel post-panel">

                <div className="panel-body">
                    <Row>
                        <Col size="md" span="2">
                            <img className="postimg" src={image} alt={name} />
                        </Col>
                        
                        <Col size="md" span="5">
                            {name}
                        </Col>
                    </Row>

                    {timeStamp}
                    <hr/>
                    <div className="panel-body">
                        {category}
                        <br />
                        {comment}

                    </div>
                </div>
            </div>
            {/* </Col> */}

            {/* </Row> */}
        </div>
    </div>

);

export default Post;