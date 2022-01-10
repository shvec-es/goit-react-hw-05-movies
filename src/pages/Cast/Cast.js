import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/movie-searcher-api';
import s from './Cast.module.css';
import noimage from '../../images/noimage.jpg';

function Cast() {
  const { movieId } = useParams();

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(data => setActors(data.cast));
  }, [movieId]);

  return (
    <ul className={s.list}>
      {actors.map(actor => (
        <li className={s.item} key={actor.id}>
          <img
            className={s.poster}
            src={
              actor.profile_path
                ? `https://www.themoviedb.org/t/p/w500${actor.profile_path}`
                : noimage
            }
            alt={actor.name}
            width={100}
          />
          <p className={s.text}>{actor.name}</p>
          <p className={s.text}>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;
