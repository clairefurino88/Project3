import React from "react";
// import { Col, Row, Wrapper } from "../BootstrapGrid";
import "./PostForm.css"; // Post Form CSS

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

);

export default PostForm;