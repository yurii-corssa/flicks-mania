import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAPI } from 'services/api';
import { Name, ReviewsCard } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchAPI(`/movie/${movieId}/reviews`)
      .then(response => setReviews(response.results))
      .catch(error => console.log(error));
  }, [movieId]);

  return reviews.length ? (
    reviews.map(({ author, content, id }) => (
      <ReviewsCard key={id}>
        <Name>{author}</Name>
        <p>{content}</p>
      </ReviewsCard>
    ))
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;
