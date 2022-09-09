import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <header className="home__header">
        <h1 className="home-h1">Skill Factory by AVALITH</h1>
        <h2 className="home-h2">TP 2</h2>
      </header>
      <section className="btn-container">
        <Link to="/contact">
          <button className="main-btn">FORM</button>
        </Link>
        <Link to="/users">
          <button className="main-btn">USERS</button>
        </Link>
        <Link to="/rick-and-morty">
          <button className="main-btn">RICK & MORTY</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
