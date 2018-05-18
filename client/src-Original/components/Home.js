import React from 'react';
import {Wrapper, Row, Col} from "./BootstrapGrid";

const styles = {
  header: {
    color: "green",
    borderStyle: "solid",
    borderWidth: "1px",
    textAlign: "center"
  }
}

export default ({loggedIn = false, user}) => {
  return (
    !loggedIn ? 
      <Wrapper>
        <Row>
          <Col offset={3}>
            <h1>Please Sign Up or Log In...</h1>
          </Col>
        </Row>
      </Wrapper>
      :
      <Wrapper>
        <Row>
          <Col>
          <h1 style={styles.header}>You are successfully logged in {user.email}!</h1>
          </Col>
        </Row>
      </Wrapper>
  );
}