import getTrendingMovies from 'components/utils/getTrendingMovies';
import { useEffect, useState } from 'react';
import TrendingGallery from './pageComponents/TrendingGallery';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState();
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState('');

    useEffect(() => {
      setStatus(STATUS.PENDING)
        getTrendingMovies().then(data => {

            setTrendingMovies(data.data.results);
            setStatus(STATUS.RESOLVED)
        }).catch(error => {
            setStatus(STATUS.REJECTED);
            setError(error)
        })
    }, []);


    if (status === STATUS.IDLE) return <h1>LOADING TRENDING MOVIES</h1>;
  if (status === STATUS.RESOLVED) return <TrendingGallery movies={trendingMovies} />
  if (status === STATUS.REJECTED) return <h1>There is error: {error.message }</h1>
  };



export default HomePage;
