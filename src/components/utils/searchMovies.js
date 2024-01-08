  import axios from 'axios';

export const API_KEY = 'f25e8315fcd9b2d71e4543b5fb39cd3f';

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
