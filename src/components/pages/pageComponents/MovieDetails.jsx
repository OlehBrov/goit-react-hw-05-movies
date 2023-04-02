import getMovieDetails from 'components/utils/getMovieDetails';
import { useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieReleaseDate, setMovieReleaseDate] = useState('');
  const [score, setScore] = useState('');
  const [poster, setPoster] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  console.log('MovieDetails ~ location:', location);

  const orderGenres = arr => {
    const allGenres = arr.reduce((total, genre) => {
      total.push(genre.name);
      return total;
    }, []);
    setGenres(allGenres.join(', '));
  };

  const { id } = useParams();
  getMovieDetails(id).then(movie => {
    setMovieTitle(movie.data.title);
    setMovieReleaseDate(movie.data.release_date.slice(0, 4));
    setScore(movie.data.vote_average);
    setPoster('https://image.tmdb.org/t/p/w500' + movie.data.poster_path);
    setOverview(movie.data.overview);
    orderGenres(movie.data.genres);
  });
  return (
    <>
      <Link to={backLinkHref}>Back</Link>
      <div>
        <img src={poster} alt={movieTitle} />
        <h1>
          {movieTitle}, ({movieReleaseDate})
        </h1>
        <p>User score: {score}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
      <div>
        <h4>Additional Information</h4>
        <ul>
          <li>
            <Link to={'Cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'Reviews'}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
