import React from "react";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import "./Feed.css"; // Feed Page CSS
import Post from "../../components/Post";
import CatButton from "../../components/CatButton";
import PostForm from "../../components/PostForm";

const Feed = ({ loggedIn, user }) => {

    return (

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

    ); // End of return()

}; // End of Feed()

export default Feed;