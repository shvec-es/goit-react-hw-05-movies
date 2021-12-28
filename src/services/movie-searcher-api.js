const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `?api_key=3beebdf74f4d418df005cba36fb7024f`;

async function mainFetch(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendings() {
  return mainFetch(`${BASE_URL}/trending/movies/day${API_KEY}`);
}

export function fetchSearcMovie(query) {
  return mainFetch(`${BASE_URL}/search/movie${API_KEY}&query=${query}`);
}

export function fetchMovieDetails(id) {
  return mainFetch(`${BASE_URL}/movie/${id}${API_KEY}`);
}

export function fetchCast(id) {
  return mainFetch(`${BASE_URL}/movie/${id}/credits${API_KEY}`);
}

export function fetchReview(id) {
  return mainFetch(`${BASE_URL}/movie/${id}/reviews${API_KEY}`);
}
