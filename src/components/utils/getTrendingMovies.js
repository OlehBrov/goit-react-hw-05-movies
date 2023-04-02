import axios from "axios"

export const API_KEY = '8ab5cec4865fda22e5306b37c1a59fd4';

const getTrendingMovies = async () => {
  try {
   const responseTrending = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
      return responseTrending;
  } catch (error) {
    console.error(error);
    }
}

export default getTrendingMovies;