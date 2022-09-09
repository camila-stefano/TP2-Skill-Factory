import "./styles.css";
import { Link } from "react-router-dom";

const Card = ({
  image,
  name,
  id: charId,
  species,
  status,
  setId,
  id,
  setIsCardSelected,
}) => {
  return (
    <Link
      to={`character/${id}`}
      className="card"
      onClick={() => {
        setIsCardSelected(true);
        setId(charId);
      }}
    >
      <img src={image} alt=""></img>
      <h4>
        <b>{name}</b>
      </h4>
      <div className="divider"></div>
      <p>
        <b>ID: </b>
        {charId}
      </p>
      <div className="divider"></div>
      <p>
        <b>Species: </b>
        {species}
      </p>
      <div className="divider"></div>
      <p>
        <b>Status: </b>
        {status}
      </p>
    </Link>
  );
};

export default Card;
