import { Link, useLocation } from 'react-router-dom';
import {
  CardWrapper,
  Poster,
  TextCard,
  TextWrapper,
  TitleCard,
} from './SearchList.styled';

const SearchList = ({ movies }) => {
  const location = useLocation();

  const defaultImg =
    'https://via.placeholder.com/200x300.png?text=Poster+Not+Available';

  return movies.map(movie => (
    <CardWrapper key={movie.id}>
      <Link to={`${movie.id}`} state={{ from: location }}>
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
  ));
};

export default SearchList;
