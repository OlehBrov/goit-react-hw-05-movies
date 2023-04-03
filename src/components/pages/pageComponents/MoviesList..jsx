import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MoviesList = ({ moviesList }) => {
    const location = useLocation()
  if (moviesList.length === 0) return <h1>No movies found</h1>;
  return (
    <ul>
      {moviesList.map(mov => (
        <li key={mov.id}>
          <StyledLink to={`/movieDetails/${mov.id}`} state={{ from: location}}>
            {mov.title}, {mov.release_date?.slice(0, 4)}
          </StyledLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: black;
  &:hover{
    color: tomato;
  }
`