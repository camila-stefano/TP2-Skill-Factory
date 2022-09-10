import "./styles.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CardsMenu = ({
  setCharacters,
  amount,
  setAmount,
  getCharacters,
  setId,
  setClear,
}) => {
  const [charName, setcharName] = useState("");
  const [searchField, setSearchField] = useState("");

  const searchResults = async (charName) => {
    console.log("charname from searchresults", charName);
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${charName}`
      );
      console.log("this is response.data", response.data);
      console.log("this is response.data.results", response.data.results);
      setSearchField("");
      setCharacters(response.data.results);
    } catch (err) {
      console.log("There was an error.", err);
    }
  };

  return (
    <div>
      <div className="cards-menu">
        <img
          className="hangingRick"
          src={require("../../assets/images/rick-hanging.png")}
          alt=""
        />
        <label htmlFor="cards-amount">
          Number of characters
          <br />
          to display:
        </label>
        <select
          name="cards-amount"
          id="cards-amount"
          onLoad={(e) => setAmount(e.target.value)}
          onChange={(e) => setAmount(e.target.value)}
        >
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
        </select>
        <Link to="/rick-and-morty">
          <button
            id="showBtn"
            onClick={() => {
              getCharacters(amount);
              setId(0);
              setClear(false);
            }}
          >
            Show characters
          </button>
        </Link>
        <div className="search">
          <label htmlFor="search-field">Search character</label>
          <input
            autoComplete="off"
            type="text"
            id="search-field"
            value={searchField}
            onChange={(e) => {
              setcharName(e.target.value);
              setSearchField(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchResults(charName);
                setClear(false);
                setId(0);
              }
            }}
          />
        </div>
        <button
          id="search-btn"
          onClick={(e) => {
            searchResults(charName);
            setId(0);
          }}
        >
          Search
        </button>
        <Link to="/rick-and-morty">
          <button
            id="clearBtn"
            onClick={() => {
              setClear(true);
            }}
          >
            Clear page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardsMenu;
