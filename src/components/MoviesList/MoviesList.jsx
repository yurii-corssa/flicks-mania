import { Link, useLocation } from 'react-router-dom';
import {
  CardWrapper,
  List,
  //   Poster,
  TextCard,
  TextWrapper,
  TitleCard,
} from './MoviesList.styled';
import Poster from 'components/Poster/Poster';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  //   const defaultImg =
  //     'https://via.placeholder.com/200x300.png?text=Poster+Not+Available';

  return (
    <List>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <Poster image={movie.poster_path} width="200" height="300" />
            {/* {!isImageLoaded && <ImageLoader width={200} height={300} />}
            <Poster
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              width={200}
              height={300}
              loading="lazy"
              alt="poster"
              onLoad={toggleImageLoading}
            /> */}
            <TextWrapper>
              <TitleCard>{movie.title}</TitleCard>
              <TextCard>{movie.overview}</TextCard>
            </TextWrapper>
          </Link>
        </CardWrapper>
      ))}
    </List>
  );
};

export default MoviesList;
