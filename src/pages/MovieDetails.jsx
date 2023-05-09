import { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backPath = useRef(location.state?.from ?? '/');
  console.log(backPath);

  return (
    <section>
      <Link to={backPath.current}>Go Back</Link>
      <div>Movie Details</div>
      <div>
        <h3>Aditional Information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link> <br />
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetails;
