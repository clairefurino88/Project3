import React from "react";
import { Col, Row } from "../BootstrapGrid";
import "./Post.css"; // User Post CSS

const Post = ({ image, name, category, timeStamp, comment }) => (

    <div className="postContainer">

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
                    <div className="postTime">{timeStamp}</div>
                </div>
            </Col>
            {/* Post Category Column */}
            <Col size="md" span="4">
                <div className="postCategory">{category}</div>
            </Col>
        </Row>
        <Row>
            {/* Post Comment Column */}
            <Col size="md">
                <div className="postComment">{comment}</div>
            </Col>
        </Row>

    </div>

    // <div>
    //     <div className="postContainer">
    //         <div className="panel">
    //             <div className="panel-body">
    //                 <Row>
    //                     <Col size="md" span="2">
    //                         <img className="postimg" src={image} alt={name} />
    //                     </Col>

    //                     <Col size="md" span="5">
    //                         {name}
    //                     </Col>
    //                 </Row>
    //                 {timeStamp}
    //                 <hr />
    //                 <div className="panel-body">
    //                     {category}
    //                     <br />
    //                     {comment}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

);

export default Post;