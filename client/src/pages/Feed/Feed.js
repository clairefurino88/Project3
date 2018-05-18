import React from "react";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import "./Feed.css"; // Feed Page CSS
import Post from "../../components/Post";
import CatButton from "../../components/CatButton";
import PostForm from "../../components/PostForm";

// Luis: Starter Code
const Feed = () => (

    <Wrapper>

  <CatButton />
        <Row>
            <Col size="md" span="8">  
                <Post
                    image="https://www.publicdomainpictures.net/pictures/30000/velka/portrait-of-a-man-1331296473U9x.jpg"
                    name="Mr Man"
                    category="Traffic"
                    comment="No comment"
                    timeStamp="date"
                />
            </Col>
            <Col size="md" span="4">
                <PostForm
                    postComment="Post gets feed into comment."
                    category="Traffic"
                />
            </Col>
        </Row>

    </Wrapper>

);

export default Feed;

{/* <h1>Feed Page</h1>
        <br />
        <h4>Route: '/feed'</h4>
        <h4>Rendering:
            <ol>
                <li>  </li>
                <li>  </li>
                <li>  </li>
            </ol>
        </h4> */}
