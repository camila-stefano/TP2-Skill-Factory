import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import Contact from "./pages/Contact";
import RickAndMorty from "./components/RickAndMorty";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import axios from "axios";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/rick-and-morty" element={<RickAndMorty />} />
      </Routes>
      <footer>
        <p class="footer-text">Made by Alan Vilalte & Cami Stéfano</p>
      </footer>
    </div>
  );
};

export default App;
