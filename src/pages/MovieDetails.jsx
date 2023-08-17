import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchAPI } from 'services/api';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useRef(useLocation());

  console.log('ref', location.current);

  useEffect(() => {
    fetchAPI(`/movie/${movieId}`)
      .then(response => {
        setMovieData(response);
        const genres = response.genres.map(genre => genre.name);
        setGenres(genres);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  const defaultImg = '';

  return (
    <main>
      <Link to={location.current?.state?.from ?? '/'}>back</Link>
      <section>
        <div>
          <img
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <div>
            <h1>{movieData.title}</h1>
            <p>Use score: {movieData.vote_average}</p>
            <h2>Overview</h2>
            <p>{movieData.overview}</p>
            <h2>Genres</h2>
            <p>
              {genres.map(g => (
                <span key={g}>{g}</span>
              ))}
            </p>
          </div>
        </div>
      </section>
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
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};

export default MovieDetails;
