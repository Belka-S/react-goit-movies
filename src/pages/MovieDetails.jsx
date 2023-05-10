import { Suspense, useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'servises/movieApi';
import { normalaizeMovieData, getMovieId } from 'servises/normalize';
import { MovieInfo } from 'components/MovieDetails/MovieInfo';
// import { Toast, notifyError } from 'components/Notification/Toast';

const MovieDetails = () => {
  const location = useLocation();
  const backPath = useRef(location.state?.from ?? '/');
  const [details, setDetails] = useState({});
  const movieId = getMovieId(location.pathname);

  useEffect(() => {
    const conttroller = new AbortController();

    async function fetch() {
      const movieData = await fetchMovieDetails(movieId, conttroller.signal);
      const normMovieData = normalaizeMovieData(movieData);
      setDetails(normMovieData);
    }
    fetch();

    return () => conttroller.abort();
  }, [movieId]);

  return (
    <section>
      <Link to={backPath.current}>Go Back</Link>
      <MovieInfo details={details} />
      <h3>Aditional Information:</h3>
      <Link to="cast">Cast</Link>
      <br />
      <Link to="reviews">Reviews</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetails;
