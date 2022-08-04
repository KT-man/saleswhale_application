import React from "react";
import styles from "./ContentContainers.module.css";

import AllTeams from "./AllTeams";
import ArchiveTeams from "./ArchiveTeams";
import FavoriteTeams from "./FavoriteTeams";

import Container from "react-bootstrap/Container";

const ContentContainer = (props) => {
  const archivedTeams = props.teams.filter((team) => team.is_archived === true);

  return (
    <Container className={styles.background}>
      {props.showAll && (
        <AllTeams
          teams={props.teams}
          addFavorite={props.addFavorite}
          removeFavorite={props.removeFavorite}
        ></AllTeams>
      )}
      {props.showFavorites && (
        <FavoriteTeams
          addFavorite={props.addFavorite}
          removeFavorite={props.removeFavorite}
          favoriteList={props.favoriteList}
        ></FavoriteTeams>
      )}
      {props.showArchive && (
        <ArchiveTeams
          archivedTeams={archivedTeams}
          addFavorite={props.addFavorite}
          removeFavorite={props.removeFavorite}
        ></ArchiveTeams>
      )}
    </Container>
  );
};

export default ContentContainer;
