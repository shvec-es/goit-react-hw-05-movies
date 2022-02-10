import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Audio } from 'react-loader-spinner';
import Container from 'components/Container';
import Navigation from 'components/Navigation';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('pages/MoviePage/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    'pages/MovieDetailsPage/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
  ),
);
const Cast = lazy(() =>
  import('pages/Cast/Cast.js' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('pages/Reviews.js' /* webpackChunkName: "reviews" */),
);

function App() {
  return (
    <Container>
      <ToastContainer autoClose={2000} theme="colored" />
      <Navigation />
      <Suspense
        fallback={
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
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
