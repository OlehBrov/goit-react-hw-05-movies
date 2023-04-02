import { Link } from 'react-router-dom';

const MoviesList = ({ moviesList }) => {
  console.log('{movies}', moviesList);
  return (
    <ul>
      {moviesList.map(mov => (
        <li key={mov.id}>
          <Link to={`/movieDetails/${mov.id}`}>
            {mov.original_title}, {mov.release_date.slice(0, 4)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
