import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchPopularMovies } from 'servises/movieApi';
import { normalaizePopularMovies } from 'servises/normalize';
import { useState } from 'react';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  // const movies = ['movie-01', 'movie-02', 'movie-03', 'movie-04', 'movie-05'];
  useEffect(() => {
    const controller = new AbortController();

    async function fetch() {
      const popularMovies = await fetchPopularMovies(controller.signal);
      const normalPopularMovies = normalaizePopularMovies(popularMovies);
      setMovies(normalPopularMovies);
    }
    fetch();

    return () => controller.abort();
  }, []);

  return (
    <main>
      <h2>Tranding Today</h2>
      <ul>
        {movies.map(({ title, id, year }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {`${title} (${year})`}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
