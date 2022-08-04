import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import IndivUser from "./IndivUser";

import styles from "./ActivityFeed.module.css";

const ActivityFeed = (props) => {
  return (
    <div className={styles.background}>
      <Container>
        <Row>
          <Col xxl={1}>
            <div className={styles.header}>Activity</div>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          {props.userActivity.map((activity) => {
            return (
              <IndivUser
                key={Math.random()}
                // Math.random() to generate pseudorandom key to avoid React warning. Could be replaced with a database _id
                activity={activity}
              ></IndivUser>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ActivityFeed;
