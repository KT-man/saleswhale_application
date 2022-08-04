import React from "react";
import CompanyCard from "./CompanyCard";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "./ContentContainer.module.css";

const FavoriteTeams = (props) => {
  return (
    <>
      <Row>
        <Col xxl={2} className={styles.allTeams}>
          Favorites
        </Col>
        <Col xxl={{ span: 3, offset: 7 }} className={styles.showing}>
          {/* Showing {props.teams.length} out of {props.teams.length} teams */}
        </Col>
      </Row>
      <hr></hr>

      <Row>Hello</Row>
    </>
  );
};

export default FavoriteTeams;
