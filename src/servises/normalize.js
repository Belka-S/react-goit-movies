export const normalaizePopularMovies = data =>
  data.map(({ id, title, release_date }) => ({
    id,
    title,
    year: release_date.substring(0, 4),
  }));

export const normalaizeQueryMovies = data =>
  data
    .filter(({ original_language }) => original_language === 'en')
    .map(({ id, title, release_date }) => ({
      id,
      title,
      year: release_date.substring(0, 4),
    }));

export const normalaizeMovieData = ({
  title,
  release_date,
  poster_path,
  vote_average,
  overview,
  genres,
}) => ({
  title,
  overview,
  voteAvr: vote_average,
  year: release_date.substring(0, 4),
  genres: genres.map(({ name }) => name).join(', '),
  poster: `https://image.tmdb.org/t/p/w500/${poster_path}`,
});

export const normalizeMovieCast = cast =>
  cast.splice(0, 9).map(({ name, character, profile_path }) => ({
    name,
    character,
    photo: `https://image.tmdb.org/t/p/w500/${profile_path}`,
  }));

export const normalizeReviews = reviews =>
  reviews.map(({ author, content }) => ({ author, content }));
