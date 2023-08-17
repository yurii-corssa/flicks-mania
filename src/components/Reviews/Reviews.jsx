import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAPI } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    fetchAPI(`/movie/${movieId}/reviews`)
      .then(response => setReviews(response.results))
      .catch(error => console.log(error));
  }, [movieId]);

  return reviews.length ? (
    <ul>
      {reviews.map(review => {
        const { author, content, id } = review;

        return (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;
