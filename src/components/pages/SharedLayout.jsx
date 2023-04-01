import { NavLink, Outlet } from 'react-router-dom';
import Header from './Header';

 const SharedLayout = () => {
  return (
    <container>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </container>
  );
};

export default SharedLayout;