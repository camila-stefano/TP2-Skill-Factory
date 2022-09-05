import { useState } from "react";
import axios from "axios";
import "./styles.css";
import CardsMenu from "./CardsMenu";

const RickAndMorty = () => {
  const [amount, setAmount] = useState(20);

  const getCharacters = async (amount) => {
    try {
      console.log("getCharacters executing");
      const list = [];
      for (let i = 1; i <= parseInt(amount); i++) {
        list.push(i);
      }
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${list}`
      );
      return response.data;
    } catch (err) {
      console.log("There was an error.", err);
    }
  };

  return (
    <div className="RickAndMorty">
      <img src="../assets/images/rick-hanging-png.png" id="bg-img" alt="" />
      <div className="main-container">
        <div className="leftSide">
          <CardsMenu
            amount={amount}
            setAmount={setAmount}
            getCharacters={getCharacters}
          />
        </div>
        <div className="rightSide">
          <div className="card-container"></div>
        </div>
      </div>
    </div>
  );
};

export default RickAndMorty;
