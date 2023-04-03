import { lazy } from 'react';

import SharedLayout from './pages/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import Cast from './pages/pageComponents/Cast';
import Reviews from './pages/pageComponents/Reviews';
const Movies = lazy(() => import('./pages/Movies'));
const HomePage = lazy(() => import('./pages/Home'));
const MovieDetails = lazy(() => import('./pages/pageComponents/MovieDetails'));

// const Cast = lazy(() => import('./pages/pageComponents/Cast'));
// const Reviews = lazy(() => import('./pages/pageComponents/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movieDetails/:id" element={<MovieDetails />}>
            <Route path="Cast" element={<Cast />}/>
            <Route path="Reviews" element={<Reviews />}/>
          </Route>
          <Route path="movies" element={<Movies />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
