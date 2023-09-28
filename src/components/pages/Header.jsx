const { NavLink } = require('react-router-dom');

const Header = () => {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <NavLink className='nav-link' to="/">Home</NavLink>
        <NavLink className='nav-link' to="/movies">Movies</NavLink>
      </nav>
    </header>
  );
};

export default Header;
