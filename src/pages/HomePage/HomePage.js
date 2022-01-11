import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Pagination, PaginationItem } from '@mui/material';
import { fetchTrendings } from 'services/movie-searcher-api';
import s from './HomePage.module.css';
import Gallery from 'components/Gallery';

function HomePage() {
  const location = useLocation();
  const [trends, setTrends] = useState([]);
  const [page, setPage] = useState(
    parseInt(location.search?.split('=')[1] || 1),
  );
  const [allPages, setAllPages] = useState(0);
  console.log(location);
  useEffect(() => {
    fetchTrendings(page).then(data => {
      setTrends(data.results);
      setAllPages(data.total_pages);
    });

    return () => {
      localStorage.removeItem('findingMovies');
    };
  }, [page]);

  return (
    <>
      <h1 className={s.title}>Trending Today</h1>
      <ul className={s.list}>
        {trends.map(({ id, poster_path, title, name }) => (
          <li key={id} className={s.item}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location, label: 'to Home page' }}
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
            to={`?page=${item.page}`}
            {...item}
          />
        )}
      />
    </>
  );
}

HomePage.propTypes = {
  trends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};
export default HomePage;
