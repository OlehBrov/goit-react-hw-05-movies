import axios from 'axios';

export const API_KEY = '8ab5cec4865fda22e5306b37c1a59fd4';

const searchMovies = async (query, page) => {
  try {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`
    );
    return movie;
  } catch (error) {
    console.error(error);
  }
};

export default searchMovies;
