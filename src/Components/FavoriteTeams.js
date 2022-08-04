import React, { useContext } from "react";
import ReactContext from "../react-context";
import styles from "./ContentContainers.module.css";

import CompanyCard from "./CompanyCard";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const FavoriteTeams = (props) => {
  const reactCtx = useContext(ReactContext);
  return (
    <>
      <Row>
        <Col xl={2} className={styles.allTeams}>
          Favorites
        </Col>
        <Col xl={{ span: 3, offset: 7 }} className={styles.showing}>
          Showing {reactCtx.favoriteList.length} out of{" "}
          {reactCtx.favoriteList.length} teams
        </Col>
      </Row>
      <hr></hr>

      <Row>
        {reactCtx.favoriteList.map((team, index) => {
          return (
            <Col xxl={4} key={Math.random()}>
              <CompanyCard teamInfo={team}></CompanyCard>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default FavoriteTeams;
