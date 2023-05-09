import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews';

// const Home = lazy(() => import('pages/Home'));
// const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const AppMovieFinder = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Route>
  </Routes>
);
