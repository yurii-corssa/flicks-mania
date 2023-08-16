import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchAPI } from 'services/api';

const TrendingList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchAPI('/trending/movie/day')
      .then(response => setMovies(response.results))
      .catch(error => console.log(error));
  }, []);

  return movies.map(movie => {
    return (
      <li key={movie.id}>
        <Link to={`movies/${movie.id}`} state={{ from: location }}>
          {movie.title}
        </Link>
      </li>
    );
  });
};

export default TrendingList;
