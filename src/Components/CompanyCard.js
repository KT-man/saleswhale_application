import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ReactComponent as CommentIcon } from "../icons/icon-conversations-small.svg";
import { ReactComponent as SmallLeadsIcon } from "../icons/icon-leads-small.svg";
import styles from "./CompanyCard.module.css";

import ReactContext from "../react-context";

const CompanyCard = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleSetIsFavorite = () => {
    setIsFavorite(true);
    console.log("running");
  };

  const reactCtx = useContext(ReactContext);

  const addToFavorite = (team) => {
    reactCtx.setFavoriteList([...reactCtx.favoriteList, team]);
  };

  const addTeamToFavorite = (teamObj) => {
    handleSetIsFavorite();
    addToFavorite(teamObj);
  };

  return (
    <div className={styles.card}>
      <Card>
        <Container
          className={`${styles.container} ${
            props.teamInfo.is_archived ? styles.archive : ""
          }`}
        >
          <Card.Body>
            <Row>
              <Col xl={1}>
                <img src={props.teamInfo.image}></img>
              </Col>
              <Col xl={{ span: 7, offset: 1 }}>
                <div className={styles.company}>{props.teamInfo.name}</div>
                <div className={styles.created_at}>
                  {props.teamInfo.created_at}
                </div>
              </Col>
              <Col xl={2}>
                {isFavorite ? (
                  <button
                    className={styles.starButton}
                    onClick={handleSetIsFavorite}
                    // onClick={handleRemoveFavorite}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#f8ce43"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </button>
                ) : (
                  <button
                    className={styles.starButton}
                    onClick={() => {
                      addTeamToFavorite(props.teamInfo);
                    }}
                    // onClick={handleAddFavorite}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#444444"
                      class="bi bi-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                  </button>
                )}
              </Col>
            </Row>
            <Row>
              <div className={styles.desc}>{props.teamInfo.description}</div>
            </Row>
            <hr></hr>
            <Row>
              <Col>
                <div className={styles.footer}>
                  <CommentIcon></CommentIcon>
                  {props.teamInfo.campaigns_count} Campaigns
                </div>
              </Col>
              <Col>
                <div className={styles.footer}>
                  <SmallLeadsIcon></SmallLeadsIcon>
                  {props.teamInfo.leads_count} Leads
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Container>
      </Card>
    </div>
  );
};

export default CompanyCard;
