import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/movie-searcher-api';

function Cast() {
  const { movieId } = useParams();

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(data => setActors(data.cast));
  }, [movieId]);

  return (
    <ul>
      {actors.map(actor => (
        <li key={actor.id}>
          {actor.profile_path ? (
            <img
              src={`https://www.themoviedb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              width={100}
            />
          ) : (
            <p>No profile photo</p>
          )}

          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;
