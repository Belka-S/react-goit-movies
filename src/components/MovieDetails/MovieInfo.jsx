export const MovieInfo = ({ details }) => {
  const { title, year, overview, voteAvr, genres, poster } = details;

  return (
    <div style={{ display: 'flex' }}>
      <img src={poster} width="250" alt="poster" />
      <div style={{ padding: '20px' }}>
        <h2>
          {title} ({year})
        </h2>
        {voteAvr > 0 && <p>User Score: {voteAvr.toFixed(1) * 10}%</p>}
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
    </div>
  );
};
