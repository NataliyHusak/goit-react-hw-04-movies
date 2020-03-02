import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styles from "./App.module.css";

import routers from "../pages/pages";
import Header from "../components/Header/Header";

const App = () => {
  return (
    <>
      <Header />

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
};

export default App;
