import React from "react";
import CompanyCard from "./CompanyCard";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "./ContentContainer.module.css";

const AllTeams = (props) => {
  return (
    <>
      <Row>
        <Col xl={2} className={styles.allTeams}>
          All Teams
        </Col>
        <Col xl={{ span: 3, offset: 7 }} className={styles.showing}>
          Showing {props.teams.length} out of {props.teams.length} teams
        </Col>
      </Row>
      <hr></hr>

      <Row>
        {props.teams.map((team) => {
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

export default AllTeams;
