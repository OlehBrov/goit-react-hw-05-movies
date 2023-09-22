import getMovieDetails from 'components/utils/getMovieDetails';
import { useRef, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
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
  const hideAdditionalRef = useRef(location.state)
  const navigate = useNavigate();
  console.log('location', location)
  console.log('backLinkHref', backLinkHref)
  console.log('hideAdditionalRef', hideAdditionalRef)
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
    <div className='container'>
      <Link className='back-btn' to={backLinkHref.current}>Back</Link>
      <div className='details-wrap'>
        <img className='details-poster' src={poster} alt={movieTitle} />
        <div className='details-movie-info'>
          <h1 className='details-movie-name'>
            {movieTitle}, ({movieReleaseDate})
          </h1>
          <p className='details-movie-score'>User score: {score}</p>
          <h2 className='details-movie-header'>Overview</h2>
          <p className='details-movie-overview'>{overview}</p>
          <h2 className='details-movie-header'>Genres</h2>
          <p className='details-movie-genre'>{genres}</p>
        </div>
      </div>
      <div>
        <h2 className='details-movie-header'>Additional Information</h2>
        <ul>
          <li>
            <button onClick={()=>navigate('Cast')}>CAST</button>
            {/* <Link to={'Cast'}>Cast</Link> */}
          </li>
          <li>
            <Link to={'Reviews'}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
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