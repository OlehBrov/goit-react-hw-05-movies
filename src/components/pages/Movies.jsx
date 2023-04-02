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
    // const [lastViewedPade, setLastViewedPade] = useState(0);
    useEffect(() => {
        setSearchQuery(query)
        setCurrentSearchPage(1)
},[])
  const fetchMovies = e => {
    if (e.type === 'submit') {
      e.preventDefault();
      setCurrentSearchPage(1);
      setSearchQuery(query.trim());
    } else {
      setCurrentSearchPage(e.selected + 1);
    }
  };
//   useEffect(() => {
//     if (query !== '') setMoviesList(query);
//   }, []);
    useEffect(() => {
      console.log('currentSearchPage', currentSearchPage)
    if (currentSearchPage === 0) return;
    searchMovies(searchQuery, currentSearchPage).then(movie => {
      setMoviesList(movie.data.results);
      setTotalPages(movie.data.total_pages);
    });
  }, [currentSearchPage, searchQuery]);

//   useEffect(() => {
//     if (query === '') setMoviesList(null);
//   }, [query]);

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
      {moviesList && <MoviesList moviesList={moviesList} />}
      {moviesList && (
        <StyledReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={fetchMovies}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
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
  }
`;
