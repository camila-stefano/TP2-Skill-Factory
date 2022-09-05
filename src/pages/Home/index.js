import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <header>
        <h1 className="home-h1">Skill Factory by AVALITH</h1>
        <h2 className='home-h2'>TP 1</h2>
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
