import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const TrendingGallery = ({ movies }) => {

const location = useLocation()
  return (
    <>
      <h1>Today trending movies</h1>
      <TrendGall>
          {movies.map(movie => (
            <TrendMovieItem key={movie.id}>
              <TrendMovieLink to={`movieDetails/${movie.id}`} state={{ from: location}}>{movie.title}</TrendMovieLink>
            </TrendMovieItem>
          ))}
      </TrendGall>
    </>
  );
};

export default TrendingGallery;

const TrendGall = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TrendMovieItem = styled.li`
  font-size: 18px;
  color: darkblue;
  list-style: none;
`;

const TrendMovieLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover{
    color: tomato;
  }
`;
