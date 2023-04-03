import getMovieDetails from 'components/utils/getMovieDetails';
import { useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components'

const MovieDetails = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieReleaseDate, setMovieReleaseDate] = useState('');
  const [score, setScore] = useState('');
  const [poster, setPoster] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

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
      <BackLinkStyled to={backLinkHref.current}>Back</BackLinkStyled>
      <DetailsWrapper className='details_wrap'>
        <img src={poster} alt={movieTitle} />
        <MovieDivStyled>
          <HeadingStyled>
            {movieTitle}, ({movieReleaseDate})
          </HeadingStyled>
          <p>User score: {score}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </MovieDivStyled>
      </DetailsWrapper>
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
const DetailsWrapper = styled.div`
display:flex;
`
const BackLinkStyled = styled(Link)`
  display: flex;
  width: 80px;
  height: 45px;
  background: gray;
  border-radius: 6px;
  margin-bottom: 10px;
  text-decoration: none;
  color: white;
  justify-content: center;
  align-items: center;
  &:hover {
    color: tomato;
  }
`;

// const OverviewContainer = styled.div`
//   display: block;
// `;

const MovieDivStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`

const HeadingStyled = styled.h1`
  margin-bottom: auto;
`