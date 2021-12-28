import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from 'services/movie-searcher-api';

function Reviews() {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchReview(movieId).then(data => setReview(data.results));
  }, [movieId]);

  return (
    <ul>
      {review.map(item => (
        <li key={item.id}>
          <p style={{ fontWeight: 500 }}>Author: {item.author}</p>
          <p style={{ marginBottom: 10 }}>{item.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;
