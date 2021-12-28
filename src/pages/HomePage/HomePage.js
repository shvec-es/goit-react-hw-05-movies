import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchTrendings } from 'services/movie-searcher-api';
import s from './HomePage.module.css';

function HomePage() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetchTrendings().then(data => setTrends(data.results));

    return () => {
      localStorage.removeItem('findingMovies');
    };
  }, []);

  return (
    <>
      <h1 className={s.title}>Trending Today</h1>
      <ul className={s.list}>
        {trends.map(({ id, title, name }) => (
          <li key={id} className={s.item}>
            <Link to={`/movies/${id}`}>{title ? title : name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

HomePage.propTypes = {
  trends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};
export default HomePage;
