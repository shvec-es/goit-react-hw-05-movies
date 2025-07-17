const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `?api_key=766903861a1eee7de57c52afa7cedc16`;

async function mainFetch(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export async function fetchTrendings(page) {
  return await mainFetch(
    `${BASE_URL}/trending/movies/day${API_KEY}&page=${page}`,
  );
}

export function fetchSearcMovie(query, page) {
  return mainFetch(
    `${BASE_URL}/search/movie${API_KEY}&query=${query}&page=${page}`,
  );
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
