import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname: location } = useLocation();
  const navBarException = `/rick-and-morty`;
  return (
    <nav
      className={
        location === navBarException ? "navBar navBar__RickAndMorty" : "navBar"
      }
    >
      <Link to="/" className="navBar__link">
        Home
      </Link>
      <Link to="./contact" className="navBar__link">
        Contact
      </Link>
      <Link to="./users" className="navBar__link">
        Users
      </Link>
      <Link to="./rick-and-morty" className="navBar__link">
        Rick and Morty
      </Link>
    </nav>
  );
};

export default NavBar;
