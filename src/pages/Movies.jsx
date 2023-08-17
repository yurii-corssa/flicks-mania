// import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query') ?? '';
  const location = useLocation();

  // console.log(searchValue);
  // console.log(searchParams);

  const onSubmit = e => {
    e.preventDefault();
    // console.log(e);
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <h1>Movies</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          value={searchValue}
          onChange={e => updateQueryString(e.target.value)}
        />
        <button type="submit">search</button>
      </form>
    </main>
  );
};

export default Movies;
