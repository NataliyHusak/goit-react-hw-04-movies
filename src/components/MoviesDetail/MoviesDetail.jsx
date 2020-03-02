import React, { Component, Suspense } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import shortId from "shortid";
import routers from "../../pages/pages";
import * as API from "../../servises/api";
import styles from "./MoviesDetail.module.css";

export default class MovieDetailsPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      })
    }).isRequired
  };

  state = {
    data: {}
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    API.getMoviesId(id)
      .then(({ data }) => {
        this.setState({ data });
      })
      .catch(error => {
        Error({
          text: error
        });
      });
  }

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { data } = this.state;
    return (
      <>
        {data.id && (
          <div className={styles.section}>
            <button className={styles.btn} type="button" onClick={this.goBack}>
              Go back
            </button>
            <div className={styles.row}>
              <div className={styles.col}>
                <img
                  className={styles.poster}
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  alt=""
                />
              </div>
              <div className={styles.col}>
                <h3 className={styles.title}>{data.original_title}</h3>
                <span className={styles.score}>
                  User Score: {data.vote_average}
                </span>
                <div className={styles.overview}>
                  <h4 className={styles.subTitle}>Overview</h4>
                  <p className={styles.text}>{data.overview}</p>
                </div>
                <div className={styles.genres}>
                  <h4 className={styles.subTitle}>Genres</h4>
                  <ul className={styles.list}>
                    {data.genres &&
                      data.genres.length !== 0 &&
                      data.genres.map(i => (
                        <li key={shortId.generate()}>{i.name}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className={styles.title}>Aditional information</h4>
              <ul className={styles.navInfo}>
                <li className={styles.item}>
                  <NavLink
                    to={`/movies/${data.id}/cast`}
                    replace
                    className={styles.link}
                    activeClassName={styles.active}
                  >
                    Cast
                  </NavLink>
                </li>
                <li className={styles.item}>
                  <NavLink
                    to={`/movies/${data.id}/reviews`}
                    replace
                    className={styles.link}
                    activeClassName={styles.active}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
              <Suspense fallback={<div>...Loading...</div>}>
                <Switch>
                  <Route
                    path={routers.CAST_PAGE.path}
                    exact
                    component={routers.CAST_PAGE.component}
                  />
                  <Route
                    path={routers.REVIEWS_PAGE.path}
                    exact
                    component={routers.REVIEWS_PAGE.component}
                  />
                </Switch>
              </Suspense>
            </div>
          </div>
        )}
      </>
    );
  }
}
