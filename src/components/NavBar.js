import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="./">Home</Link>
      <Link to="./users">Users</Link>
      <Link to="./contact">Contact</Link>
      <Link to="./rick-and-morty">Rick and Morty</Link>
    </nav>
  );
};

export default NavBar;
