import getMovieReviews from 'components/utils/getMovieReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Reviews = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState();
  const [reviews, setReviews] = useState('');
  const { id } = useParams();

  useEffect(() => {
    setStatus(STATUS.PENDING);
    getMovieReviews(id)
      .then(reviewsData => {
        if (reviewsData.data.results.length === 0) {
          setReviews([
            {
              id: '000',
              author: 'Oops!',
              content: 'This movie has no reviews. Maybe its boring',
            },
          ]);
          setStatus(STATUS.RESOLVED);
        } else setReviews(reviewsData.data.results);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => setError(error), setStatus(STATUS.REJECTED));
  }, [id]);

  if (status === STATUS.PENDING || status === STATUS.IDLE)
    return <h1>Loading reviews</h1>;

  if (status === STATUS.RESOLVED)
    return (
      <>
        <h1>REVIEWS</h1>
        <ul>
          {reviews.map(el => (
            <li key={el.id}>
              <p>{el.author}</p>

              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  if (status === STATUS.REJECTED) return <h1>Some error - {error} happened</h1>;
};

export default Reviews;
