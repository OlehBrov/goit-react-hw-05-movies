import getMovieCredits from 'components/utils/getMovieCredits';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ActorsList from './ActorsList';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMovieCredits(id).then(credits => {
      setCast(credits.data.cast);
    });
  }, [id]);

  return (
    <div className='casting-list-wrap'>
      {/* <p>{ cast}</p> */}
      <ActorsList actorsList={cast} />
    </div>
  );
};

export default Cast;
