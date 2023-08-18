import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { fetchAPI } from 'services/api';
import {
  DetailsContainer,
  LinkStyled,
  MovieDetailsSection,
  SubTitle,
  Text,
  TextWrapper,
  Title,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useRef(useLocation());

  useEffect(() => {
    fetchAPI(`/movie/${movieId}`)
      .then(response => {
        setMovieData(response);
        const genres = response.genres.map(genre => genre.name);
        setGenres(genres);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  const defaultImg =
    'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  return (
    <main>
      <MovieDetailsSection>
        <LinkStyled to={location.current?.state?.from ?? '/'}>
          <ArrowBackIosRoundedIcon />
          Back
        </LinkStyled>
        <DetailsContainer>
          <img
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                : defaultImg
            }
            width={400}
            alt="poster"
          />
          <TextWrapper>
            <Title>{movieData.title}</Title>
            <Text>Use score: {movieData.vote_average?.toFixed(1)}</Text>
            <SubTitle>Overview</SubTitle>
            <Text>{movieData.overview}</Text>
            <SubTitle>Genres</SubTitle>
            <Text>
              {genres.map(g => (
                <span key={g}>{g}</span>
              ))}
            </Text>
          </TextWrapper>
        </DetailsContainer>
      </MovieDetailsSection>
      <section>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <ul>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </ul>
      </section>
    </main>
  );
};

export default MovieDetails;
