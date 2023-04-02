import SharedLayout from './pages/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import HomePage from './pages/Home';
import MovieDetails from './pages/pageComponents/MovieDetails';
import Cast from './pages/pageComponents/Cast';
import Reviews from './pages/pageComponents/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movieDetails/:id" element={<MovieDetails />} >
            <Route path='Cast' element={<Cast />}></Route>
            <Route path='Reviews' element={<Reviews/>}></Route>
          </Route>
          <Route path="movies" element={<Movies />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
