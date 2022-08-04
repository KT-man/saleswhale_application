import React, { useState } from "react";
import AllTeams from "./AllTeams";
import ArchiveTeams from "./ArchiveTeams";
import FavoriteTeams from "./FavoriteTeams";

import CompanyCard from "./CompanyCard";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "./ContentContainer.module.css";

const ContentContainer = (props) => {
  console.log(props);
  const archivedTeams = props.teams.filter((team) => team.is_archived === true);

  return (
    <Container className={styles.background}>
      {props.showAll && <AllTeams teams={props.teams}></AllTeams>}
      {props.showFavorites && <FavoriteTeams></FavoriteTeams>}
      {props.showArchive && (
        <ArchiveTeams archivedTeams={archivedTeams}></ArchiveTeams>
      )}
      {/* <Row>
        <Col xxl={2} className={styles.allTeams}>
          All Teams
        </Col>
        <Col xxl={{ span: 3, offset: 7 }} className={styles.showing}>
          Showing {props.teams.length} out of {props.teams.length} teams
        </Col>
      </Row>
      <hr></hr>

      {!props.showFavorites && !props.showArchive && (
        <Row>
          {props.teams.map((team) => {
            return (
              <Col xxl={4} key={Math.random()}>
                <CompanyCard teamInfo={team}></CompanyCard>
              </Col>
            );
          })}
        </Row>
      )}

      {props.showArchive && (
        <Row>
          {archivedTeams.map((team) => {
            return (
              <Col xxl={4} key={Math.random()}>
                <CompanyCard teamInfo={team}></CompanyCard>
              </Col>
            );
          })}
        </Row>
      )} */}
    </Container>
  );
};

export default ContentContainer;
