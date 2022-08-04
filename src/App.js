import "./App.css";
import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

import SideNav from "./Components/SideNav";
import PageNav from "./Components/PageNav";
import Header from "./Components/Header";
import ContentContainer from "./Components/ContentContainer";

import ActivityFeed from "./Components/ActivityFeed";
import "./App.css";

function App() {
  const [teams, setTeams] = useState([]);
  const [userActivity, setUserActivity] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const [showAll, setShowAll] = useState(true);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showArchive, setShowArchive] = useState(false);

  const [favoriteList, setFavoriteList] = useState([]);

  // --------------------------
  // -------------------------- Fetching Data from JSON
  // ----------Setting of required fetch functions
  function handleSetTeams(obj) {
    setTeams(obj);
  }

  function handleSetUserActivity(obj) {
    setUserActivity(obj);
  }

  function handleSetCurrentUser(obj) {
    setCurrentUser(obj);
  }

  const localUrl = "./data.json";

  async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json();

    handleSetTeams(data.teams);
    handleSetUserActivity(data.activities);
    handleSetCurrentUser(data.current_user);
  }

  // --------------------------
  // -------------------------- useEffect to fetch data
  // --------------------------
  useEffect(() => {
    fetchData(localUrl);
  }, []);

  // --------------------------
  // -------------------------- Functions to set "all", "favorite", and "archive"
  // -------------------------- Handler functions will have to be passed down to Header

  const handleSetShowAll = () => {
    setShowAll(true);
    setShowFavorites(false);
    setShowArchive(false);
  };

  const handleSetShowFavorite = () => {
    setShowFavorites(true);
    setShowAll(false);
    setShowArchive(false);
  };

  const handleSetShowArchive = () => {
    console.log("working)");
    setShowArchive(true);
    setShowAll(false);
    setShowFavorites(false);
  };

  // --------------------------
  // -------------------------- Functions to populate favorites array
  // --------------------------

  const handleSetFavoriteList = (team) => {
    setFavoriteList([...favoriteList, team]);
    console.log("add");
    console.log(favoriteList);
  };

  const removeFromFavorites = (index) => {
    const removedFavorite = favoriteList.filter((team, i) => i !== index);
    setFavoriteList([removedFavorite]);
    console.log("minus");
    console.log(favoriteList);
  };

  return (
    <div className="App">
      <div>
        <Container fluid>
          <Row>
            <Col>
              <SideNav></SideNav>
            </Col>
            <Col xs={11}>
              <PageNav className="main" current_user={currentUser}></PageNav>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 11, offset: 1 }}>
              <Header
                className="main"
                handleSetShowAll={handleSetShowAll}
                handleSetShowFavorite={handleSetShowFavorite}
                handleSetShowArchive={handleSetShowArchive}
              ></Header>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 1 }}>
              <ContentContainer
                className="main"
                teams={teams}
                showAll={showAll}
                showFavorites={showFavorites}
                showArchive={showArchive}
                favoriteList={favoriteList}
              ></ContentContainer>
            </Col>
            <Col md={3}>
              <ActivityFeed userActivity={userActivity}></ActivityFeed>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
