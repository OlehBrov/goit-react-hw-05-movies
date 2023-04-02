import axios from "axios"
import { API_KEY } from "./getTrendingMovies"

const getMovieReviews = (id) => {
   try {
        const movieReviews = axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`)
        return movieReviews;
}
  catch (error) {
        console.log(error)
    } 

}
export default getMovieReviews;