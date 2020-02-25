import React, { Component } from "react";
import * as API from "../../servises/api";
import List from "../MoviesList/MoviesList";
import styles from "./HomePage.module.css";

export default class HomePage extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    API.getMoviesTrending()
      .then(({ data }) => {
        this.setState({ movies: data.results });
      })
      .catch(error => {
        Error({
          text: error
        });
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <section className={styles.moviesList}>
        <h1 className={styles.title}>Trending today</h1>
        <List data={movies} />
      </section>
    );
  }
}
