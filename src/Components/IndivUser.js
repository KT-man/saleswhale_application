import React from "react";

import styles from "./IndivUser.module.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const IndivUser = (props) => {
  let printString = "";
  switch (props.activity.action) {
    case "increased_quota":
      printString = (
        <React.Fragment>
          <span className={styles.bolded}>{props.activity.person.name}</span>{" "}
          increased{" "}
          <span className={styles.bolded}>{props.activity.target}</span> quota.
        </React.Fragment>
      );

      break;
    case "added_leads":
      printString = (
        <React.Fragment>
          <span className={styles.bolded}>{props.activity.person.name}</span>{" "}
          added new leads to{" "}
          <span className={styles.bolded}>{props.activity.target}</span>.
        </React.Fragment>
      );

      break;
    case "archived_team":
      printString = (
        <React.Fragment>
          <span className={styles.bolded}>{props.activity.person.name}</span>{" "}
          archived the team{" "}
          <span className={styles.bolded}>{props.activity.target}</span>.
        </React.Fragment>
      );

    default:
      break;
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
