import React from "react";
import API from "../../utils/API";
import { Col, Row, Wrapper } from "../../components/BootstrapGrid";
import CatButtons from "../../components/CatButtons";
import Post from "../../components/Post";
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
                console.log("New post added successfully! Clear post form...");
                // Clear post form values
                this.setState({
                    postBody: "",
                    postCategory: ""
                });
                // this.getAllUserPosts();
            });
    };

    componentDidMount = () => {
        console.log("Profile() > componentDidMount() > 'this.state.user': ", this.state.user);
        this.getAllUserPosts();
    };

    getAllUserPostsByCategory = (category) => {
        if (category !== "All") {
            API.getPostsByCat(category)
                .then((res) => {
                    console.log("Feed() > getPostsByCat() > 'res.data': ", res.data);
                    if (res.data.length > 0) this.setState({ posts: res.data });
                    else this.setState({ posts: [] });
                });
        }
        else this.getAllUserPosts();
    };

    getAllUserPosts = () => {
        API.getPostsByUser()
            .then((res) => {
                console.log("Profile() > getAllUserPosts() > 'res.data.Posts.length': ", res.data.Posts.length);
                console.log("Profile() > getAllUserPosts() > 'res.data': ", res.data);
                if (res.data.Posts.length > 0) this.setState({ posts: res.data.Posts });
                else this.setState({ posts: [] });
                console.log("Profile() > getAllUserPosts() > 'this.state.user': ", this.state.user);
                console.log("Profile() > getAllUserPosts() > 'this.state.posts': ", this.state.posts);
            });
    };

    render() {

        return (

            <div className="profileContainer">
                <CatButtons getPosts={this.getAllUserPostsByCategory} />
                <Wrapper>
                    <Row>

                        {/* User Profile Column */}
                        <Col size="md" span="4">
                            <div className="userInfoContainer">
                                <UserInfo
                                    image="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Flmcdesign-rj6zcy7b8ypu79snuv.netdna-ssl.com%2Fwp-content%2Fuploads%2F2016%2F01%2FShrek_Tile-1-500x500.jpg&f=1"
                                    name="Don the Boss"
                                    email="bobbybillyboy@gmail.com"
                                    occupation="Plumber"
                                    relationshipType="Long-term love"
                                    location="Newark, NJ"
                                    bio="I'm just a regular plumber, dawg."
                                />
                            </div>
                        </Col>

                        {/* User Feed Column */}
                        <Col size="md" span="8">
                            <div className="userFeedContainer">
                                {!this.state.posts.length ?
                                    (<p className="feedHeader">No Stories...</p>)
                                    :
                                    ([
                                        <p key="feedHeader" className="feedHeader">Your Stories...</p>,
                                        this.state.posts.map(function(post) {
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
                                    ])
                                };
                            </div>
                        </Col>

                        {/* User New Post Column
                        <Col size="md" span="3">
                            <div className="userPostFormContainer">
                                <span style={{ color: "white" }}>User Post Form</span>
                            </div>
                        </Col> */}

                    </Row>
                </Wrapper>
            </div>

        ); // End of return()

    }; // End of render()

}; // End of class Profile

export default Profile;

// Previous Code
// const Profile = () => (

//   <Wrapper>
//     <Row>
//         {/*  User Information Column */}
//         <Col size="md" span="7">
//             {/*  User Image */}
//             <div className="userContainer">
//                 <div className="userTitle">About Me</div>
//                 <UserInfo
//                     image="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Flmcdesign-rj6zcy7b8ypu79snuv.netdna-ssl.com%2Fwp-content%2Fuploads%2F2016%2F01%2FShrek_Tile-1-500x500.jpg&f=1"
//                     name="Don the Boss"
//                     email="bobbybillyboy@gmail.com"
//                     occupation="Plumber"
//                     relationshipType="Long-term love"
//                     location="Newark, NJ"
//                     bio="I'm just a regular plumber, dawg." />
//             </div>
//         </Col>

//             {/* Empty Column */}
//             <Col size="md" span="1"> </Col>

//             {/* User's feed post Column */}
//             <Col size="md" span="4">
//                 <Post
//                     comment="User's feed post"
//                     category="Traffic"
//                 />
//             </Col>

//         </Row>

//     </Wrapper>

// ); // End of Profile()

// export default Profile;