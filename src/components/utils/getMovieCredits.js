import axios from "axios"
import { API_KEY } from "./getTrendingMovies";

const getMovieCredits = (id) => {
         try {
        const movieCredits = axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
        return movieCredits;
}
  catch (error) {
        console.log(error)
    }

}

export default getMovieCredits;