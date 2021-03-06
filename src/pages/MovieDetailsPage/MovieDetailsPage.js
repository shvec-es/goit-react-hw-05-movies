import React, { useEffect, useState } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import { fetchMovieDetails } from 'services/movie-searcher-api';
import s from './MovieDetailsPage.module.css';
import noimage from '../../images/noimage.jpg';
import { toast } from 'react-toastify';

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
    if (location && location.state && location.state.from) {
      navigate(location.state.from);
      return;
    }

    navigate('/');
  };

  if (status === 'pending') {
    return (
      <Audio
        color="#BC8F8F"
        height={50}
        width={50}
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '50px',
        }}
      />
    );
  }

  if (status === 'response') {
    const yearFromDate = movieDetails.release_date.split('-').slice(0, 1);
    const genreList = movieDetails.genres.map(genre => genre.name).join(' ');

    return (
      <>
        <button className={s.btn} type="button" onClick={backToMovies}>
          Go {location.state.label}
        </button>
        <article>
          <div className={s.description}>
            <img
              src={
                movieDetails.poster_path
                  ? `https://www.themoviedb.org/t/p/w500${movieDetails.poster_path}`
                  : noimage
              }
              alt={movieDetails.title}
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
          <ul className={s.list}>
            <li className={s.item}>
              <NavLink
                to="cast"
                state={{ from: location.state.from, label: 'back' }}
              >
                Cast
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink
                to="reviews"
                state={{ from: location.state.from, label: 'back' }}
              >
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
    return toast.error('Oops...something wrong');
  }
}

export default MovieDetailsPage;
