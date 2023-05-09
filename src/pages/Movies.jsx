import { Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  const movies = ['movie-6', 'movie-7', 'movie-8', 'movie-9'];

  return (
    <main>
      <div>Serch Form</div>
      <ul>
        {movies.map(el => (
          <li key={el}>
            <Link to={el} state={{ from: location }}>
              {el}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Movies;
