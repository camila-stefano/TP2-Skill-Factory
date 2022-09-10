import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CharacterDetail = () => {
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const { id } = useParams();
  const fetchCharacter = async (id) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const selected = response.data;
    setSelectedCharacter({ ...selected });
  };

  useEffect(() => {
    fetchCharacter(id);
  }, [id]);

  console.log("current id: ", id);
  console.log("current character: ", selectedCharacter.name);
  return id ? (
    <div className="card-detail">
      <div className="card-detail__left-side">
        <div className="card-detail__img-container">
          <img
            className="card-detail__img"
            src={selectedCharacter.image}
            alt=""
          />
        </div>
        <h3 className="card-detail__name">{selectedCharacter.name}</h3>
      </div>
      <div className="card-detail__right-side">
        <p>ID: {selectedCharacter.id}</p>
        <p>Status: {selectedCharacter.status}</p>
        <p>Species: {selectedCharacter.species}</p>
        <p>Planet of origin:{selectedCharacter.origin?.name}</p>
        <p>Current Location: {selectedCharacter.location?.name}</p>
        <Link to="/rick-and-morty">
          <p className="card-detail__go-back-btn">Go back</p>
        </Link>
      </div>
    </div>
  ) : null;
};

export default CharacterDetail;
