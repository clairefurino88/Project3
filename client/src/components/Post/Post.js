import React from "react";
import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./Post.css"; // User Post CSS

// Luis: Starter Code
const Post = ({ image, name, category, timeStamp, comment }) => (



    // {/* <h1>User Post</h1>
    //     <br />
    //     <h4>Route: '/feed' AND '/profile'</h4>
    //     <h4>Rendering User Post:
    //         <ol>
    //             <li>User Image</li>
    //             <li>Name</li>
    //             <li>Post Timestamp</li>
    //             <li>Category</li>
    //             <li>Comment</li>
    //         </ol>
    //     </h4> */}
    
        <div>
            <div className="postContainer">
            <h4>Hate Feed</h4>
            <p>Share your story...</p>
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