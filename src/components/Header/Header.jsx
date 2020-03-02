import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import routers from "../../pages/pages";
import styles from "../Header/Header.module.css";

export default class Header extends Component {
  state = {};

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
              alt="The Movie Database (TMDb)"
              width="40"
              height="36"
            />
          </a>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              to={routers.HOME_PAGE.path}
              exact
              className={styles.link}
              activeClassName={styles.active}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={routers.MOVIES_PAGE.path}
              className={styles.link}
              activeClassName={styles.active}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
    );
  }
}
