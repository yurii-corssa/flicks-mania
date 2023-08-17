import { Link, useLocation } from 'react-router-dom';

const SearchList = ({ movies }) => {
  const location = useLocation();

  return movies.map(movie => (
    <li key={movie.id}>
      <Link to={`${movie.id}`} state={{ from: location }}>
        <p>{movie.title}</p>
      </Link>
    </li>
  ));
};

export default SearchList;
