import React from "react";
import styles from "./SideNav.module.css";

import Nav from "react-bootstrap/Nav";

import { ReactComponent as SwLogo } from "../icons/sw-logo-white.svg";
import { ReactComponent as MessageIcon } from "../icons/icon-campaign.svg";
import { ReactComponent as CompaniesIcon } from "../icons/icon-companies.svg";
import { ReactComponent as LeadsIcon } from "../icons/icon-leads.svg";
import { ReactComponent as ReportsIcon } from "../icons/icon-reports.svg";
import { ReactComponent as HelpIcon } from "../icons/icon-help.svg";

const SideNav = () => {
  return (
    <>
      <Nav className={`flex-column ${styles.sidenav}`}>
        <Nav.Link className={styles.iconBox} href="/home">
          <SwLogo className={styles.icon}></SwLogo>
        </Nav.Link>
        <Nav.Link className={styles.iconBox}>
          <MessageIcon className={styles.icon}></MessageIcon>
        </Nav.Link>
        <Nav.Link className={styles.iconBox}>
          <CompaniesIcon className={styles.icon}></CompaniesIcon>
        </Nav.Link>
        <Nav.Link className={styles.iconBox}>
          <LeadsIcon className={styles.icon}></LeadsIcon>
        </Nav.Link>
        <Nav.Link className={styles.iconBox}>
          <ReportsIcon className={styles.icon}></ReportsIcon>
        </Nav.Link>
        <Nav.Link className={styles.iconBox}>
          <HelpIcon className={styles.icon}></HelpIcon>
        </Nav.Link>
      </Nav>
    </>
  );
};

export default SideNav;
