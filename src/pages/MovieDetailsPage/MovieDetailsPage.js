import React, { useEffect, useState } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  NavLink,
  Outlet,
} from 'react-router-dom';

import { fetchMovieDetails } from 'services/movie-searcher-api';
import s from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [movieDetails, setMovieDetails] = useState({});
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => {
        setMovieDetails(data);
        setStatus('response');
      })
      .catch(err => {
        console.log(err);
        setStatus('error');
      });
  }, [movieId]);

  const backToMovies = () => {
    navigate(location.state.from);
  };

  if (status === 'pending') {
    return <h2>Loading...</h2>;
  }

  if (status === 'response') {
    const yearFromDate = movieDetails.release_date.split('-').slice(0, 1);
    const genreList = movieDetails.genres.map(genre => genre.name).join(' ');

    return (
      <>
        <button className={s.btn} type="button" onClick={backToMovies}>
          Go back
        </button>
        <article>
          <div className={s.description}>
            <img
              src={`https://www.themoviedb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              width={260}
              className={s.poster}
            />
            <div>
              <h2>
                {movieDetails.title} ({yearFromDate})
              </h2>
              <p className={s.text}>
                User score: {movieDetails.vote_average * 10}%
              </p>
              {movieDetails.overview && (
                <>
                  <h3>Overview</h3>
                  <p className={s.text}>{movieDetails.overview}</p>
                </>
              )}
              {genreList && (
                <>
                  <h3>Genres</h3>
                  <p className={s.text}>{genreList}</p>
                </>
              )}
            </div>
          </div>

          <hr />
          <ul>
            <li className={s.item}>
              <NavLink to="cast" state={{ from: location.state.from }}>
                Cast
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink to="reviews" state={{ from: location.state.from }}>
                Reviews
              </NavLink>
            </li>
          </ul>
          <hr />
          <Outlet />
        </article>
      </>
    );
  }

  if (status === 'error') {
    return alert('Oops...something wrong');
  }
}

export default MovieDetailsPage;
