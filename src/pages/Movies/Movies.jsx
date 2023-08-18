import SearchList from 'components/SearchList/SearchList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchAPI } from 'services/api';
import {
  Button,
  FindSection,
  Input,
  List,
  SearchForm,
  SearchSection,
  Text,
  Title,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    fetchAPI(`/search/movie?query=${query}`)
      .then(response => setMovies(response.results))
      .catch(error => console.log(error));
  }, [searchParams]);

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;

    if (!query) {
      alert('Enter name of movie to search');
      return;
    }
    setSearchParams({ query });
    e.target.reset();
  };

  return (
    <main>
      <FindSection>
        <Title>Find Movies, Explore & Have Fun!</Title>
        <SearchForm onSubmit={onSubmit}>
          <Input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
          />
          <Button type="submit">Search</Button>
        </SearchForm>
      </FindSection>
      <SearchSection>
        {movies.length ? (
          <List>
            <SearchList movies={movies} />
          </List>
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
    </main>
  );
};

export default Movies;
