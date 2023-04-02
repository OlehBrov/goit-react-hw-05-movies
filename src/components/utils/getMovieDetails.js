import axios from "axios"
import { API_KEY } from "./getTrendingMovies"

const getMovieDetails = async (id) => {
    try {
        const movieDetails = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        return movieDetails;
}
  catch (error) {
        console.log(error)
    }

} 

export default getMovieDetails;