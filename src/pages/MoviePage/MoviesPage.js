import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Pagination, PaginationItem } from '@mui/material';
import { fetchSearcMovie } from 'services/movie-searcher-api';
import s from './MoviePage.module.css';
import Gallery from 'components/Gallery';
import { toast } from 'react-toastify';

function MoviesPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState(0);

  useEffect(() => {
    const currentMovies = JSON.parse(localStorage.getItem('findingMovies'));

    if (currentMovies) {
      setMovies(currentMovies);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('findingMovies', JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    if (query.trim() === '') {
      return;
    }

    fetchSearcMovie(query, page)
      .then(data => {
        if (data.results.length > 0) {
          setMovies(data.results);
          setAllPages(data.total_pages);
        } else {
          toast.warning('Enter correct querry');
        }
      })
      .catch(err => {
        console.log(err);
        toast.error('Oops...something wrong');
      });
  }, [page, query]);

  const handleSearchForm = e => {
    e.preventDefault();

    if (e.target.query.value.trim() === '') {
      toast.warning('Enter word for search');
      return;
    }

    setQuery(e.target.query.value);
    navigate({ ...location, search: `query=${e.target.query.value}` });

    e.target.query.value = '';
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSearchForm}>
        <input
          type="text"
          className={s.input}
          name="query"
          autoComplete="off"
          placeholder="Enter word for search"
        ></input>
        <button type="submit" className={s.btn}></button>
      </form>

      {movies.length > 0 && (
        <>
          <ul className={s.list}>
            {movies.map(({ id, poster_path, title, name }) => (
              <li className={s.item} key={id}>
                <Link
                  to={`${id}`}
                  state={{ from: location, label: 'to Movies page' }}
                >
                  <Gallery poster={poster_path} title={title} name={name} />
                </Link>
              </li>
            ))}
          </ul>
          <Pagination
            count={allPages}
            page={page}
            onChange={(_, num) => setPage(num)}
            sx={{ display: 'flex', justifyContent: 'center' }}
            showFirstButton
            showLastButton
            renderItem={item => (
              <PaginationItem
                component={Link}
                to={`/movies?query=${query}&page=${item.page}`}
                {...item}
              />
            )}
          />
        </>
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
