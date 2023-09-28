import { Link, useLocation } from 'react-router-dom';

export const Card = ({ movie }) => {
  const location = useLocation()
  return (
    <div className="movie-gallery-item" key={movie.id}>
      <Link
        className="movie-card-link"
        to={`/movieDetails/${movie.id}`}
        state={{ from: location }}
      >
        <div className="poster-wrap">
          <img
            className="poster"
            src={
              movie.poster_path !== null
                ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                : 'https://placehold.co/400x600?text=No%20image'
            }
            alt=""
          />
          <div className="poster-descr">
            <h4 className="text-2xl">Movie overview</h4>{' '}
            <span className="block"></span>
            <p className="pt-2 line-clamp-6">{movie.overview} </p>{' '}
          </div>
        </div>{' '}
        <p className="movie-link-title">
          {movie.title}
          {movie.release_date !== '' && ", " + movie.release_date.substring(0, 4)}
        </p>
      </Link>
    </div>
  );
};
