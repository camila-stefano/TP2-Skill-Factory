import "./styles.css";
import Card from "./Card";

const CardsMenu = ({ getCharacters, amount, setAmount }) => {
  const displayCards = async (amount) => {
    const characters = await getCharacters(amount);
    console.log("displayCards executing");
    characters.map((character) => {
      return (
        <Card
          id={character.id}
          image={character.image}
          name={character.name}
          species={character.species}
          status={character.status}
        />
      );
    });
  };

  console.log("amount", amount);
  return (
    <div>
      <div id="title">
        <h1 className="cards-page-h1">
          Rick <span>and</span> Morty
        </h1>
      </div>
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
          onChange={(e) => setAmount(e.target.value)}
        >
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>
        <button id="showBtn" onClick={() => displayCards(amount)}>
          Show characters
        </button>
        <div className="search">
          <label htmlFor="search-field">Search character</label>
          <input type="text" id="search-field" />
        </div>
        <button id="search-btn">Search</button>
        <button id="clearBtn">Clear page</button>
      </div>
    </div>
  );
};

export default CardsMenu;
