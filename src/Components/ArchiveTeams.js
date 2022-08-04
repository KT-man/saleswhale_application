import React from "react";
import CompanyCard from "./CompanyCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "./ContentContainer.module.css";

const ArchiveTeams = (props) => {
  return (
    <>
      <Row>
        <Col xl={2} className={styles.allTeams}>
          Archived
        </Col>
        <Col xl={{ span: 3, offset: 7 }} className={styles.showing}>
          Showing {props.archivedTeams.length} out of{" "}
          {props.archivedTeams.length} teams
        </Col>
      </Row>
      <Row>
        {props.archivedTeams.map((team) => {
          return (
            <Col xl={4} key={Math.random()}>
              <CompanyCard
                teamInfo={team}
                addFavorite={props.addFavorite}
                removeFavorite={props.removeFavorite}
              ></CompanyCard>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ArchiveTeams;
