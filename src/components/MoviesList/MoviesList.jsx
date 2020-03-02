import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MoviesList.module.css";

const List = ({ data }) => (
  <ul className={styles.list}>
    {data.map(movies => (
      <li key={movies.id} className={styles.item}>
        <NavLink
          to={`/movies/${movies.id}`}
          className={styles.link}
          activeClassName={styles.active}
        >
          {movies.title || movies.name}
        </NavLink>
      </li>
    ))}
  </ul>
);

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired
};

export default List;
