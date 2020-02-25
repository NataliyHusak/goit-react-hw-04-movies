import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

const List = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map(e => (
        <li key={e.id} className={styles.item}>
          <NavLink
            to={`/movies/${e.id}`}
            className={styles.link}
            activeClassName={styles.active}
          >
            {e.title || e.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default List;