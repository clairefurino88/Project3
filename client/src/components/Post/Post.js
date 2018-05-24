import React from "react";
import { Col, Row } from "../BootstrapGrid";

import "./Post.css"; // User Post CSS

const Post = ({ image, name, category, timeStamp, comment, handleDelete, id, UserId, user_id }) => {
    var time = new Date(timeStamp).toUTCString().slice(0, 26);
    return (
        <div className="postContainer">
            <form id={id} onSubmit={handleDelete}>
                <Row>
                    {/* Post User Image Column */}
                    <Col size="md" span="2">
                        <div className="postImg">
                            <img src={image} alt={name} />
                        </div>
                    </Col>
                    {/* Post User Name and Timestamp Column */}
                    <Col size="md" span="6">
                        <div className="postUserAndTime">
                            <div className="postUser">{name}</div>
                            <div className="postTime" style={{ fontSize: "12px" }}><span style={{ color: 'yellow', fontSize: '11px', textDecorationLine: 'underline' }}>{time}</span></div>
                        </div>
                    </Col>
                    {/* Post Category Column */}
                    {/* <Col size="md" span="2">

                        <div className="postCategory">{category}</div>

                    </Col> */}
                    <Col size="md" span="4">
                        <div className="postDelBtn">  {UserId == user_id ? <button id="postDelBtn">✗</button> : ""}</div>
                        <div className="postCategory">{category}</div>
                    </Col>
                </Row>
                <Row>
                    {/* Post Comment Column */}
                    <Col size="md">

                        <div className="postComment">{comment}</div>
                    </Col>

                </Row>

            </form>
        </div>

    ); // End of return()

}; // End of Post()

export default Post;