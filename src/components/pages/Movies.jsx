import searchMovies from 'components/utils/searchMovies';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from './pageComponents/MoviesList.';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams('');
    const [moviesList, setMoviesList] = useState(null);
    const [totalPages, setTotalPages] = useState('');
    const [currentSearchPage, setCurrentSearchPage] = useState(1);
    const query = searchParams.get('query');
    
  const fetchMovies = e => {
    e.preventDefault();
      searchMovies(query, currentSearchPage).then(movie => {
          console.log('movie', movie)
          setMoviesList(movie.data.results);
          setTotalPages(movie.data.total_pages)
      });
  };
  return (
    <div>
      <form action="" onSubmit={e => fetchMovies(e)}>
        <label htmlFor="">
          <input
            type="text"
            value={query ? query : ''}
            onChange={e => setSearchParams({ query: e.target.value })}
          />
        </label>
        <button type="submit">Search</button>
      </form>
         { moviesList&& <MoviesList moviesList={moviesList } />}
    </div>
  );
};

export default Movies;
