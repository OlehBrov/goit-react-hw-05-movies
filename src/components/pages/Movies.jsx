import searchMovies from 'components/utils/searchMovies';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import MoviesList from './pageComponents/MoviesList.';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [moviesList, setMoviesList] = useState(null);
  const [totalPages, setTotalPages] = useState('');
  const [currentSearchPage, setCurrentSearchPage] = useState(0);
  const query = searchParams.get('query');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
      setCurrentSearchPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!query) setSearchQuery('');
  }, [query]);
  const fetchMovies = e => {
    if (e.type === 'submit') {
      e.preventDefault();
      setCurrentSearchPage(1);
      setSearchQuery(query.trim());
    } else {
      setCurrentSearchPage(e.selected + 1);
    }
  };

  useEffect(() => {
    if (currentSearchPage === 0) return;
    if (searchQuery === '') return;
    searchMovies(searchQuery, currentSearchPage).then(movie => {
      setMoviesList(movie.data.results);
      if (movie.data.results.length > 0) setTotalPages(movie.data.total_pages);
      if (movie.data.results.length === 0) setTotalPages(0);
    });
  }, [currentSearchPage, searchQuery]);


  return (
    <div className='container'>
      <div className='search-form-wrap'>
        <form className='search-form' action="" onSubmit={e => fetchMovies(e)}>
        <label className='search-input-label' htmlFor="">
          <input
            className='search-input'
            type="text"
            value={query ? query : ''}
            onChange={e => setSearchParams({ query: e.target.value })}
          />
        <button className='submit-search-btn' type="submit">Search</button>
        </label>
        </form>
        <button className='clear-btn' disabled={!moviesList} onClick={() => {
        setMoviesList(null)
          setSearchParams('')
          
      }}>Clear</button>
      </div>
      
   
      {searchQuery === '' && <></>}
      {moviesList && <MoviesList moviesList={moviesList} />}
      {moviesList && (
        <StyledReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={fetchMovies}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="< Previous"
          renderOnZeroPageCount={false}
          activeClassName="activeClassName"
          // pageClassName={StyledPageClassName}
        />
      )}
    </div>
  );
};

export default Movies;

const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 8px;
  width: 100%;

  li {
    padding: 1px 3px;
    min-width: 35px;
    height: 35px;
    display: flex;
    background: #202020;
    border-radius: 6px;
    align-items: center;
    justify-content: center;

    /* transform: scale(1.2); */
    &:hover {
      transform: scale(1.15);
    }
  }
  .activeClassName {
    background-color: green;
  }
  a {
    cursor: pointer;
    color: white;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;



