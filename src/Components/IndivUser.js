import React from "react";

import styles from "./IndivUser.module.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const IndivUser = (props) => {
  let printString = "";
  switch (props.activity.action) {
    case "increased_quota":
      printString = `${props.activity.person.name} increased ${props.activity.target} quota.`;
      break;
    case "added_leads":
      printString = `${props.activity.person.name} added new leads to ${props.activity.target}.`;
      break;
    case "archived_team":
      printString = `${props.activity.person.name} archived the team ${props.activity.target}.`;
  }

  return (
    <div>
      <Container>
        <Row>
          <Col xxl={1}>
            <img
              src={props.activity.person.avatar}
              className={styles.avatar}
            ></img>
          </Col>
          <Col xxl={{ span: 9, offset: 1 }} className={styles.printString}>
            {printString}
          </Col>
        </Row>
        <Row>
          <Col xxl={{ span: 9, offset: 2 }} className={styles.createdAt}>
            {props.activity.created_at}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IndivUser;
