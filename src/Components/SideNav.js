import React from "react";
import Nav from "react-bootstrap/Nav";

import styles from "./SideNav.module.css";
import { ReactComponent as SwLogo } from "../icons/sw-logo-white.svg";
import { ReactComponent as MessageIcon } from "../icons/icon-campaign.svg";
import { ReactComponent as CompaniesIcon } from "../icons/icon-companies.svg";
import { ReactComponent as LeadsIcon } from "../icons/icon-leads.svg";
import { ReactComponent as ReportsIcon } from "../icons/icon-reports.svg";
import { ReactComponent as HelpIcon } from "../icons/icon-help.svg";

const SideNav = () => {
  return (
    <>
      <Nav className={`flex-column ${styles.sidenav}`} as="ul">
        <Nav.Link className={styles.icon} as="li">
          <SwLogo></SwLogo>
        </Nav.Link>
        <Nav.Link className={styles.icon} as="li">
          <MessageIcon></MessageIcon>
        </Nav.Link>
        <Nav.Link className={styles.icon} as="li">
          <CompaniesIcon></CompaniesIcon>
        </Nav.Link>
        <Nav.Link className={styles.icon} as="li">
          <LeadsIcon></LeadsIcon>
        </Nav.Link>
        <Nav.Link className={styles.icon} as="li">
          <ReportsIcon></ReportsIcon>
        </Nav.Link>
        <Nav.Link className={styles.icon} as="li">
          <HelpIcon></HelpIcon>
        </Nav.Link>
      </Nav>
    </>
  );
};

export default SideNav;
