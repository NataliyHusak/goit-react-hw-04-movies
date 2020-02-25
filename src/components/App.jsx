import React, { Component, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styles from "./App.module.css";
import { NavLink } from 'react-router-dom';
import routers from "../pages/pages";

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
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

        <main className={styles.main}>
          <Suspense fallback={<div>...Loading</div>}>
            <Switch>
              <Route
                exact
                path={routers.HOME_PAGE.path}
                component={routers.HOME_PAGE.component}
              />
              <Route
                path={routers.MOVIE_DETAILS_PAGE.path}
                component={routers.MOVIE_DETAILS_PAGE.component}
              />
              <Route
                path={routers.MOVIES_PAGE.path}
                component={routers.MOVIES_PAGE.component}
              />
              <Redirect to={routers.HOME_PAGE.path} />
            </Switch>
          </Suspense>
        </main>
      </>
    );
  }
}
