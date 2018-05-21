import React from "react";
// import { Col, Row, Wrapper } from "../BootstrapGrid";
import { Wrapper } from "../BootstrapGrid";
import "./UserInfo.css"; // Profile Page User Info CSS

const UserInfo = ({ image, name, email, occupation, relationshipType, location, bio }) => (

    <Wrapper>
        <div style={{
            background: 'linear-gradient(to bottom left, #D572CC, #452846)',
            display: 'block',
            boxShadow: '0 2px 4px 0 rgba(38, 47, 42, 1), 0 6px 15px 0 rgba(0, 0, 0, 0.19',
            borderRadius: '2%'
        }} className="userDiv">
            <br />
            <strong style={{
                paddingLeft: '5px',
                fontSize: '14px',
                color: 'white',
                background: 'linear-gradient(to bottom right, #e1000e, black)',
                display: 'block',
                boxShadow: '0 2px 4px 0 rgba(38, 47, 42, 1), 0 6px 15px 0 rgba(0, 0, 0, 0.19',
                padding: '10px 15px',
                borderBottom: '1px solid transparent',
                borderTopRightRadius: '3px',
                borderTopLeftRadius: '3px'
            }}>About Me</strong>
            <br />
            <br />
            <img style={{
                maxWidth: '300px',
                maxHeight: '300px',
                minWidth: '300px',
                minHeight: '300px',
                display: 'block',
                margin: 'auto',
                border: '3px solid #ffffff',
                boxShadow: '3-x 4px',
                borderRadius: '0% 10% 0% 10%'
            }} src={image} />
            <br />
            <br />
            <strong style={{
                paddingLeft: '10px',
                color: 'grey'
            }}>Name:</strong> <p style={{
                color: 'white',
                paddingLeft: '10px', marginBottom: '0', fontSize: '17px'
            }}>{name}</p>
            <br />
            <strong style={{
                paddingLeft: '10px',
                color: 'grey'
            }}>Email:</strong> <p style={{
                color: 'white',
                paddingLeft: '10px', marginBottom: '0', fontSize: '17px'
            }}><a href="#" style={{ color: '#F8FE99' }}>{email}</a></p>
            <br />
            <strong style={{
                paddingLeft: '10px',
                color: 'grey'
            }}>Occupation:</strong> <p style={{
                color: 'white',
                paddingLeft: '10px', marginBottom: '0', fontSize: '17px'
            }}>{occupation}</p>
            <br />
            <strong style={{
                paddingLeft: '10px',
                color: 'grey'
            }}>Looking for:</strong> <p style={{
                color: 'white',
                paddingLeft: '10px', marginBottom: '0', fontSize: '17px'
            }}>{relationshipType}</p>
            <br />
            <strong style={{
                paddingLeft: '10px',
                color: 'grey'
            }}>Location:</strong> <p style={{
                color: 'white',
                paddingLeft: '10px', marginBottom: '0', fontSize: '17px'
            }}>{location}</p>
            <br />
            <strong style={{
                paddingLeft: '10px',
                color: 'grey'
            }}>Bio:</strong> <p style={{
                color: 'white',
                paddingLeft: '10px', paddingBottom: '5px', marginBottom: '0', fontSize: '17px'
            }}>{bio}</p>
        </div>
        <br />
        <br />
        <div className="userPosts"
            style={{
                background: 'linear-gradient(to bottom left, #D572CC, #452846)',
                display: 'block',
                boxShadow: '0 2px 4px 0 rgba(38, 47, 42, 1), 0 6px 15px 0 rgba(0, 0, 0, 0.19',
                borderRadius: '2%'
            }}>
            <p style={{ color: 'white' }}>**WHERE USER POSTS WILL GO**</p>
        </div>

    </Wrapper>

);

export default UserInfo;
