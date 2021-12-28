import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { fetchSearcMovie } from 'services/movie-searcher-api';
import s from './MoviePage.module.css';

function MoviesPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const currentMovies = JSON.parse(localStorage.getItem('findingMovies'));

    if (currentMovies) {
      setMovies(currentMovies);
    }
  }, []);

  useEffect(() => {
    if (query.trim() === '') {
      return;
    }

    fetchSearcMovie(query)
      .then(data => {
        if (data.results.length > 0) {
          setMovies(data.results);
        } else {
          alert('Enter correct querry');
        }
      })
      .catch(err => {
        console.log(err);
        alert('Oops...something wrong');
      });

    localStorage.setItem('findingMovies', JSON.stringify(movies));
  }, [movies, query]);

  const handleSearchForm = e => {
    e.preventDefault();

    if (e.target.query.value.trim() === '') {
      alert('Enter word for search');
      return;
    }

    setQuery(e.target.query.value);
    navigate({ ...location, search: `query=${e.target.query.value}` });
    e.target.query.value = '';
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSearchForm}>
        <input type="text" name="query" autoComplete="off"></input>
        <button type="button">Search</button>
      </form>

      {movies.length > 0 && (
        <ul className={s.list}>
          {movies.map(movie => (
            <li className={s.item} key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

MoviesPage.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ),
};
export default MoviesPage;
