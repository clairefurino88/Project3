import React from "react";
import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./PostForm.css"; // Post Form CSS

// Luis: Starter Code
const PostForm = ({ postComment, category }) => (

    <div>
        {/* <Row> */}
            <div className="panel panel-default">
                <div className="post panel-heading">Post Form</div>
                <div className="post panel-body">
                    <textarea className="post form-control" rows="20"/>
                    {postComment}
                    <br />
                    {category}
                    <br />
                    <button style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
                    </button>
                </div>
            </div>
        {/* </Row> */}
    </div>


    // <Wrapper>

    //     <h1>Post Form</h1>
    //     <br />
    //     <h4>Route: '/feed'</h4>
    //     <h4>Rendering User Post Form:
    //         <ol>
    //             <li>Comment Box/Textarea</li>
    //             <li>Category</li>
    //             <li>Submit Button</li>
    //         </ol>
    //     </h4>

    // </Wrapper>

);

export default PostForm;