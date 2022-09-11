import { Route, Routes } from "react-router-dom";
import UsersTable from "./pages/Users";
import ColorFilter from "./components/ColorFilter";
import Contact from "./pages/Contact";
import RickAndMorty from "./pages/RickAndMorty";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CharacterDetail from "./pages/RickAndMorty/CharacterDetail";

const App = () => {
  return (
    <div className="App">
      <ColorFilter />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home title="TP 2 Skill Factory" />} />
        <Route path="*" element={<Home title="TP 2 Skill Factory" />} />
        <Route path="/contact" element={<Contact title="Contact" />} />
        <Route path="/users" element={<UsersTable title="Users" />} />
        <Route
          path="/rick-and-morty"
          element={<RickAndMorty title={"Rick and Morty"} />}
        >
          <Route path="character/:id" element={<CharacterDetail />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
