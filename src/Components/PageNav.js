import React from "react";
import styles from "./PageNav.module.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { ReactComponent as MailIcon } from "../icons/icon-mail.svg";
import { ReactComponent as NumberIcon } from "../icons/icon-5.svg";

const PageNav = (props) => {
  return (
    <div className={styles.navbar}>
      <Navbar className={styles.nav}>
        <Navbar.Brand
          className={`${styles.brand} ${styles.navText}`}
          href="/home"
        >
          NARWHAL
        </Navbar.Brand>
        <Nav>
          <span className={styles.vl}></span>
          <Nav.Link className={styles.teams} href="/teams">
            Teams
          </Nav.Link>
        </Nav>
        <div className={styles.floatRight}>
          <span>
            <MailIcon className={styles.mailIcon}></MailIcon>
            <NumberIcon className={styles.numberIcon}></NumberIcon>
            {/* For more responsive numbers, I would store SVG icons in a separate
            file and load conditionally based on props.current_user.notifications_count */}
          </span>
          <span>Hello, {props.current_user.name}</span>
          <span>
            <img src={props.current_user.avatar} alt="userAvatar"></img>
          </span>
        </div>
      </Navbar>
    </div>
  );
};

export default PageNav;
