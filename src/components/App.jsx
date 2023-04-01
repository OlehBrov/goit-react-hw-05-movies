import SharedLayout from "./pages/SharedLayout";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";



export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="movies" element={<Movies/>}/>
       </Route>
      </Routes>
   </div>
  );
};
