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
    // if (searchQuery === '') return;
    searchMovies(searchQuery, currentSearchPage).then(movie => {
      setMoviesList(movie.data.results);
      if (movie.data.results.length > 0) setTotalPages(movie.data.total_pages);
      if (movie.data.results.length === 0) setTotalPages(0);
    });
  }, [currentSearchPage, searchQuery]);

  return (
    <div>
      <form action="" onSubmit={e => fetchMovies(e)}>
        <label htmlFor="">
          <StyledInput
            type="text"
            value={query ? query : ''}
            onChange={e => setSearchParams({ query: e.target.value })}
          />
        </label>
        <SearchButton type="submit">Search</SearchButton>
      </form>
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

const StyledInput = styled.input`
  margin-left: 20px;
  margin-right: 20px;

  padding: 10px;
  font-size: 18px;
  border-width: 2px;
  border-color: #9ca6b9;
  background-color: #ffffff;
  color: #000000;
  border-style: solid;
  border-radius: 12px;
  box-shadow: 0px 1px 8px rgba(66, 66, 66, 0.75);
  text-shadow: 0px 0px 1px rgba(66, 66, 66, 0.75);
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  box-shadow: 0px 0px 0px 2px #9fb4f2;
  background: linear-gradient(to bottom, #d1e2ff 5%, #476e9e 100%);
  background-color: #d1e2ff;
  border-radius: 10px;
  border: 1px solid #4e6096;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 19px;
  padding: 12px 37px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #283966;
  &:hover {
    background: linear-gradient(to bottom, #476e9e 5%, #d1e2ff 100%);
    background-color: #476e9e;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
