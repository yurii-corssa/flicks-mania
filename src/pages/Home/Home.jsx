import { useEffect, useState } from 'react';
import { Hero, SubTitle, Text, Title, TopReleases } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchAPI } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAPI('/trending/movie/day')
      .then(response => setMovies(response.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Hero>
        <Title>Movies</Title>
        <Text>
          Welcome to the cinematic universe where your movie quest begins!
          Unleash your inner film buff and embark on a thrilling adventure to
          discover hidden gems and all-time classics.
        </Text>
      </Hero>
      <TopReleases>
        <SubTitle>Today&apos;s Hottest Releases</SubTitle>
        <MoviesList movies={movies} />
      </TopReleases>
    </>
  );
};

export default Home;
