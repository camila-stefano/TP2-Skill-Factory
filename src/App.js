import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Contact from "./pages/Contact";
import RickAndMorty from "./pages/RickAndMorty";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
};

export default App;
