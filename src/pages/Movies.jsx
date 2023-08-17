import SearchList from 'SearchList/SearchList';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchAPI } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    fetchAPI(`/search/movie?query=${query}`)
      .then(response => setMovies(response.results))
      .catch(error => console.log(error));
  }, [searchParams]);

  // console.log(searchValue);
  // console.log(searchParams)
  // console.log(movies);

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
      <section>
        <h1>Movies</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search"
          />
          <button type="submit">search</button>
        </form>
        {/* <p>{console.log(movies)}</p> */}
      </section>
      <section>
        <ul>{movies.length ? <SearchList movies={movies} /> : ''}</ul>
      </section>
    </main>
  );
};

export default Movies;
