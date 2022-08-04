import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "./PageNav.module.css";
import { ReactComponent as MailIcon } from "../icons/icon-mail.svg";

const PageNav = (props) => {
  return (
    <div className={styles.navbar}>
      <Navbar className={styles.nav}>
        <Navbar.Brand className={`${styles.brand} ${styles.navText}`}>
          NARWHAL
        </Navbar.Brand>
        <Nav>
          <span className={styles.vl}></span>
          <Nav.Link className={`${styles.teams} ${styles.textfields}`}>
            Teams
          </Nav.Link>
        </Nav>
        <div className={styles.floatRight}>
          <span>
            <MailIcon></MailIcon>
            {/* For more responsive numbers, I would store SVG icons in a separate
            file and load conditionally based on props.current_user.notifications_count */}
            <svg
              className={styles.numberIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#2995DA"
              class="bi bi-5-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.006 4.158c1.74 0 2.924-1.119 2.924-2.806 0-1.641-1.178-2.584-2.56-2.584-.897 0-1.442.421-1.612.68h-.064l.193-2.344h3.621V4.002H5.791L5.445 8.63h1.149c.193-.358.668-.809 1.435-.809.85 0 1.582.604 1.582 1.57 0 1.085-.779 1.682-1.57 1.682-.697 0-1.389-.31-1.53-1.031H5.276c.065 1.213 1.149 2.115 2.72 2.115Z" />
            </svg>
          </span>
          <span>Hello, {props.current_user.name}</span>
          <span>
            <img src={props.current_user.avatar}></img>
          </span>
        </div>
      </Navbar>
    </div>
  );
};

export default PageNav;
