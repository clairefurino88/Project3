import React from "react";
import API from "../../utils/API";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import CatButtons from "../../components/CatButtons";
import Post from "../../components/Post";
import PostForm2 from "../../components/PostForm2"
import UserInfo from "../../components/UserInfo";
import "./Profile.css"; // Profile Page CSS

class Profile extends React.Component {

    state = {
        loggedIn: this.props.loggedIn,
        user: this.props.user,
        postBody: "",
        postCategory: "",
        posts: []
    };

    addPost = (event) => {
        event.preventDefault();
        API.createPost({
            body: event.target.postBody.value,
            category: event.target.postCategory.value
        })
            .then((res) => {
                // Clear post form values
                this.setState({
                    postBody: "",
                    postCategory: ""
                });
                this.getUserPosts();
            });
    };

    componentDidMount = () => {
        this.getUserPosts();
    };

    getUserPostsByCategory = (category) => {
        const userId = this.state.user.user.id;
        if (category !== "All") {
            API.getPostsByCat(category, userId)
                .then((res) => {
                    if (res.data.length > 0) this.setState({ posts: res.data });
                    else this.setState({ posts: [] });
                });
        }
        else this.getUserPosts();
    };

    getUserPosts = () => {
        const userId = this.state.user.user.id;
        API.getPostsByUser(userId)
            .then((res) => {
                if (res.data.length > 0) this.setState({ posts: res.data });
                else this.setState({ posts: [] });
            });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {

        return (

            <div className="profileContainer">
                <CatButtons getPosts={this.getUserPostsByCategory} />
                <Wrapper>
                    <Row>

                        {/* User Profile Column */}
                        <Col size="md" span="4">
                            <div className="userInfoContainer">
                                <UserInfo
                                    image={this.state.user.user.imageUrl}
                                    name={this.state.user.user.name}
                                    email={this.state.user.user.email}
                                    occupation={this.state.user.user.occupation}
                                    relationshipType={this.state.user.user.relationshipType}
                                    location={this.state.user.user.location}
                                    bio={this.state.user.user.bio}
                                />
                            </div>
                        </Col>

                        {/* User Feed/Post Form Column */}
                        <Col size="md" span="8">
                            {!this.state.posts.length ?
                                <p className="feedHeader">No Stories...</p>
                                :
                                <p key="feedHeader" className="feedHeader">Your Stories...</p>
                            }
                            <div className="userPostForm">
                                <PostForm2
                                    addPost={this.addPost}
                                    handleInputChange={this.handleInputChange}
                                    postBody={this.state.postBody}
                                    postCategory={this.state.postCategory}
                                />
                            </div>
                            <div className="userFeedContainer">
                                {!this.state.posts.length ?
                                    ""
                                    :
                                    (
                                        // <p key="feedHeader" className="feedHeader">Your Stories...</p>,
                                        this.state.posts.map(function (post) {
                                            let { name, imageUrl } = this.state.user.user;
                                            return (
                                                <Post
                                                    key={post.id}
                                                    id={post.id}
                                                    category={post.category}
                                                    comment={post.body}
                                                    image={imageUrl}
                                                    name={name}
                                                    timeStamp={post.updatedAt}
                                                />
                                            );
                                        }, this)
                                    )
                                };
                            </div>
                        </Col>

                    </Row>
                </Wrapper>
            </div>

        ); // End of return()

    }; // End of render()

}; // End of class Profile

export default Profile;