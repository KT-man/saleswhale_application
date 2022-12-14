import React from "react";
import styles from "./Header.module.css";

import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import { ReactComponent as CompaniesIcon } from "../icons/icon-companies.svg";
import { ReactComponent as PlusSign } from "../icons/PlusSign.svg";
import { ReactComponent as SearchIcon } from "../icons/icon-search.svg";

const Header = (props) => {
  return (
    <div className={styles.headerContainer}>
      <Row>
        <Col xs={1}>
          <CompaniesIcon className={styles.companyIcon}></CompaniesIcon>
        </Col>
        <Col xs={2}>
          <div className={styles.teams}>Teams</div>
        </Col>
        <Col sm={{ span: 5, offset: 4 }}>
          <div>
            <Button className={styles.newTeamButton}>
              <PlusSign className={styles.plusSign}></PlusSign> CREATE NEW TEAM
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Nav className={styles.headerNav}>
            <Nav.Link
              className={styles.underline}
              onClick={props.handleSetShowAll}
            >
              All
            </Nav.Link>
            <Nav.Link
              className={styles.underline}
              onClick={props.handleSetShowFavorite}
            >
              Favorites
            </Nav.Link>
            <Nav.Link
              className={styles.underline}
              onClick={props.handleSetShowArchive}
            >
              Archive
            </Nav.Link>
          </Nav>
        </Col>

        <Col sm={{ span: 3, offset: 5 }}>
          <InputGroup className={`mb-3 `}>
            <InputGroup.Text className={styles.inputText}>
              <SearchIcon></SearchIcon>
            </InputGroup.Text>
            <Form.Control
              className={styles.inputBox}
              placeholder="Search team name..."
              aria-label="Search team name"
            />
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
