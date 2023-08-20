import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchAPI } from 'services/api';
import { FindSection, SearchSection, Text, Title } from './Movies.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    fetchAPI(`/search/movie?query=${query}`)
      .then(response => setMovies(response.results))
      .catch(error => console.log(error));
  }, [searchParams]);

  const onSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <FindSection>
        <Title>Find Movies, Explore & Have Fun!</Title>
        <SearchForm onSubmit={onSubmit} />
      </FindSection>
      <SearchSection>
        {movies.length ? (
          <MoviesList movies={movies} />
        ) : (
          <Text>
            Dive into our fantastic movie search engine to find that perfect
            movie for tonight's viewing party. Whether you're in the mood for
            action, romance, or a sci-fi thriller, the world of cinema is just a
            search away. Don't hesitate, there's always something worth
            watching!
          </Text>
        )}
      </SearchSection>
    </>
  );
};

export default Movies;
