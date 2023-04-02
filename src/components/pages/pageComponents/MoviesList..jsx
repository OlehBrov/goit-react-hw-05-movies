import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ moviesList }) => {
    const location = useLocation()
    console.log('MoviesList', location)
  if (moviesList.length === 0) return <h1>No movies found</h1>;
  return (
    <ul>
      {moviesList.map(mov => (
        <li key={mov.id}>
          <Link to={`/movieDetails/${mov.id}`} state={{ from: location}}>
            {mov.title}, {mov.release_date?.slice(0, 4)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
