import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  const { pathname: location } = useLocation();
  const [hidden, setHidden] = useState(true);
  const navBarException = location === `/rick-and-morty`;

  return (
    <nav className={`navBar ${navBarException ? "navBar__RickAndMorty" : ""} ${hidden ? "navBar__hidden" : ""}`}>
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
      <button onClick={() => setHidden(!hidden)} className="hide__btn">
        {hidden ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default NavBar;
