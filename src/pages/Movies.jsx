import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchQueryMovies } from 'servises/movieApi';
import { normalaizeQueryMovies } from 'servises/normalize';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  // const movies = ['movie-6', 'movie-7', 'movie-8', 'movie-9'];
  const handleSearch = e => {
    e.preventDefault();

    setSearchParams({ search: searchQuery });
    setSearchQuery('');
  };

  useEffect(() => {
    const query = searchParams.get('search');
    if (query === '') return;

    const conttroller = new AbortController();

    async function fetch() {
      const searchResalts = await fetchQueryMovies(query, conttroller.signal);
      const normSearchResults = normalaizeQueryMovies(searchResalts);
      setMovies(normSearchResults);
    }
    fetch();

    return () => conttroller.abort();
  }, [searchParams]);

  return (
    <main>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ title, id, year }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location, movieId: id }}>
              {`${title} (${year})`}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Movies;
