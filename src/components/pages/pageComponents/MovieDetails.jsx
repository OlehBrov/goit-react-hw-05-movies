import getMovieDetails from 'components/utils/getMovieDetails';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';


const MovieDetails = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieReleaseDate, setMovieReleaseDate] = useState('');
  const [score, setScore] = useState('');
  const [poster, setPoster] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [details, setDetails] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const [castLoad, setCastLoad] = useState(false);
  const [castIsOpen, setCastIsOpen] = useState(false);
  const [reviewsLoad, setReviewsLoad] = useState(false);
  const [reviewsIsOpen, setReviewsIsOpen] = useState(false);

  const navigate = useNavigate();
  const moviePage = useRef(location);
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
    setDetails(true);
  });
  useEffect(() => {
    const movieDetailsTl = gsap.timeline();
    if (!details) return;
    movieDetailsTl
      .from('.details-poster', {
        xPercent: -100,
        opacity: 0,
        duration: 0.5,
        ease: 'power.out',
      })
      .from(
        '.details-movie-info',
        {
          xPercent: 100,
          opacity: 0,
          duration: 1,
          ease: 'power.out',
        },
        '<'
      );
  }, [details]);

  const castHandler = () => {
    if (!castLoad) {
      navigate('Cast');
      setCastLoad(true);
      setCastIsOpen(true);
      setReviewsIsOpen(false);
      return;
    }
    if (reviewsIsOpen) {
      gsap.to('.review-list-wrap', {
        yPercent: 100,
        opacity: 0,
        onComplete: () => {
          setReviewsIsOpen(false);
          gsap.set('.review-list-wrap', { display: 'none' });
          navigate(moviePage);
          navigate('Cast');
          setCastLoad(true);
          setCastIsOpen(true);
          return;
        },
      });
    }
    if (castIsOpen) {
      gsap.to('.casting-list-wrap', {
        yPercent: 100,
        opacity: 0,
        onComplete: () => {
          setCastIsOpen(false);
          setReviewsIsOpen(false);
          gsap.set('.casting-list-wrap', { display: 'none' });
          navigate(moviePage.current);
        },
      });
      return;
    }
    if (!castIsOpen) {
      navigate('Cast');
      setCastLoad(true);
      setReviewsIsOpen(false);
      gsap.set('.casting-list-wrap', { display: 'flex' });
      gsap.to('.casting-list-wrap', {
        yPercent: 0,
        opacity: 1,
        onComplete: () => setCastIsOpen(true),
      });
      return;
    }
  };
  const reviewsHandler = () => {
   
    if (!reviewsLoad) {
      navigate('Reviews');
      setReviewsLoad(true);
      setReviewsIsOpen(true);
      setCastIsOpen(false);
      return;
    }
    if (castIsOpen) {
      gsap.to('.casting-list-wrap', {
        yPercent: 100,
        opacity: 0,
        onComplete: () => {
          setCastIsOpen(false);
          gsap.set('.casting-list-wrap', { display: 'none' });
          navigate(moviePage);
          navigate('Reviews')
          setReviewsLoad(true)
          setReviewsIsOpen(true)
        },
      });
      // navigate('Cast');
    }
    if (reviewsIsOpen) {
      gsap.to('.review-list-wrap', {
        yPercent: 100,
        opacity: 0,
        onComplete: () => {
          setReviewsIsOpen(false);
          setCastIsOpen(false);
          gsap.set('.review-list-wrap', { display: 'none' });
          navigate(moviePage.current);
        },
      });
      return;
    }
    if (!reviewsIsOpen) {
      navigate('Reviews')
      setReviewsLoad(true)
      setCastIsOpen(false)
      gsap.set('.review-list-wrap', { display: 'flex' });
      gsap.to('.review-list-wrap', {
        yPercent: 0,
        opacity: 1,
        onComplete: () => setReviewsIsOpen(true),
      });
      return;
    }
  };

  return (
    <div className="container">
      <Link className="back-btn" to={backLinkHref.current}>
        Back
      </Link>
      <div className="details-wrap">
        <img className="details-poster" src={poster} alt={movieTitle} />
        <div className="details-movie-info">
          <h1 className="details-movie-name">
            {movieTitle}, ({movieReleaseDate})
          </h1>
          <p className="details-movie-score">User score: {score}</p>
          <h2 className="details-movie-header">Overview</h2>
          <p className="details-movie-overview">{overview}</p>
          <h2 className="details-movie-header">Genres</h2>
          <p className="details-movie-genre">{genres}</p>
        </div>
      </div>
      <div>
        <h2 className="details-movie-header">Additional Information</h2>
        <ul className='additional-info-list'>
          <li>
            {/* <button onClick={() => navigate('Cast')}>CAST</button> */}
            <button className='additional-info-btn' onClick={castHandler}>CAST</button>

            {/* <Link to={'Cast'}>Cast</Link> */}
          </li>
          <li>
            <button className='additional-info-btn' onClick={reviewsHandler}>Reviews</button>
            {/* <Link to={'Reviews'}>Reviews</Link> */}
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;

