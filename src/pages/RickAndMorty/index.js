import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import CardsMenu from "./CardsMenu";
import Card from "./Card";
import axios from "axios";
import "./styles.css";
// import Pagination from "./Pagination";

const RickAndMorty = ({ title }) => {
  // const [info, setInfo] = useState({}); // Para la paginacion en la busqueda por nombre. -pending
  const [characters, setCharacters] = useState([]);
  const [amount, setAmount] = useState(20);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [id, setId] = useState(0);
  const [clear, setClear] = useState(false);

  const getCharacters = async (amount) => {
    try {
      const list = [];
      for (let i = 1; i <= parseInt(amount); i++) {
        list.push(i);
      }
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${list}`
      );
      setCharacters(response.data);
      return characters;
    } catch (err) {
      console.error("There was an error.", err);
    }
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    setId(0);
  }, [characters]);

  return !id && !clear ? (
    <div className="RickAndMorty">
      <div className="main-container">
        <div className="leftSide">
          <div id="title">
            <h1 className="cards-page-h1">
              Rick <span>and</span> Morty
            </h1>
          </div>
          <CardsMenu
            setId={setId}
            characters={characters}
            setCharacters={setCharacters}
            setAmount={setAmount}
            amount={amount}
            getCharacters={getCharacters}
            setClear={setClear}
          />
        </div>
        <div className="rightSide">
          <div className="card-container">
            {characters.map((character) => {
              return (
                <Card
                  id={character.id}
                  setId={setId}
                  isCardSelected={isCardSelected}
                  setIsCardSelected={setIsCardSelected}
                  image={character.image}
                  name={character.name}
                  species={character.species}
                  status={character.status}
                  key={character.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <NavBar />
      <div className="RickAndMorty">
        <div className="main-container">
          <div className="leftSide">
            <div id="title">
              <h1 className="cards-page-h1">
                Rick <span>and</span> Morty
              </h1>
            </div>
            <CardsMenu
              setId={setId}
              characters={characters}
              setCharacters={setCharacters}
              setAmount={setAmount}
              amount={amount}
              getCharacters={getCharacters}
              setClear={setClear}
            />
          </div>
          <div className="rightSide__card-detail">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default RickAndMorty;
