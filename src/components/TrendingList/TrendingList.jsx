import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchAPI } from 'services/api';
import {
  CardWrapper,
  Poster,
  TextCard,
  TextWrapper,
  TitleCard,
} from './TrendingList.styled';

const TrendingList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchAPI('/trending/movie/day')
      .then(response => setMovies(response.results))
      .catch(error => console.log(error));
  }, []);

  const defaultImg =
    'https://via.placeholder.com/200x300.png?text=Poster+Not+Available';

  return movies.map(movie => {
    return (
      <CardWrapper key={movie.id}>
        <Link to={`movies/${movie.id}`} state={{ from: location }}>
          <Poster
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={200}
            alt="poster"
          />
          <TextWrapper>
            <TitleCard>{movie.title}</TitleCard>
            <TextCard>{movie.overview}</TextCard>
          </TextWrapper>
        </Link>
      </CardWrapper>
    );
  });
};

export default TrendingList;
