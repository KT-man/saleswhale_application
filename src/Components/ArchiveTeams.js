import React from "react";
import CompanyCard from "./CompanyCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "./ContentContainer.module.css";

const ArchiveTeams = (props) => {
  return (
    <>
      <Row>
        <Col xxl={2} className={styles.allTeams}>
          Archived
        </Col>
        <Col xxl={{ span: 3, offset: 7 }} className={styles.showing}>
          Showing {props.archivedTeams.length} out of{" "}
          {props.archivedTeams.length} teams
        </Col>
      </Row>
      <Row>
        {props.archivedTeams.map((team) => {
          return (
            <Col xxl={4} key={Math.random()}>
              {/* Math.random() to generate pseudorandom key to avoid React warning. Could be replaced with a database _id */}
              <CompanyCard teamInfo={team}></CompanyCard>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ArchiveTeams;
