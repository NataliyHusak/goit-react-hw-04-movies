import React, { Component } from "react";
import PropTypes from "prop-types";
import * as API from "../../servises/api";
import styles from "./Reviews.module.css";

export default class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      }).isRequired
    }).isRequired
  };

  state = {
    data: {}
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    API.getMoviesReviews(id)
      .then(({ data }) => this.setState({ data }))
      .catch(error => {
        Error({
          text: error
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <ul className={styles.list}>
        {(data.results &&
          data.results.length !== 0 &&
          data.results.map(result => (
            <li className={styles.item} key={result.id}>
              <h5 className={styles.title}>{result.author}</h5>
              <p className={styles.text}>{result.content}</p>
            </li>
          ))) || (
          <div className={styles.text}>
            We do not have any reviews for this movie.
          </div>
        )}
      </ul>
    );
  }
}
