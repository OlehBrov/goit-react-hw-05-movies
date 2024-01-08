import axios from "axios"

export const API_KEY = 'f25e8315fcd9b2d71e4543b5fb39cd3f';

const getTrendingMovies = async () => {
  try {
   const responseTrending = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
      return responseTrending;
  } catch (error) {
    console.error(error);
    }
}

export default getTrendingMovies;
