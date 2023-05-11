import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'servises/movieApi';
import { normalizeReviews } from 'servises/normalize';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isReviews, setIsReviews] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    return () => {
      async function fetch() {
        const movieReviews = await fetchMovieReviews(movieId);
        const normReviews = normalizeReviews(movieReviews.results);
        setReviews(normReviews);
        setIsReviews(normReviews.length > 0);
      }
      fetch();
    };
  }, [movieId]);
  return (
    <>
      {!isReviews ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
