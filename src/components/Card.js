const Card = ({ image, name, id: charId, species, status }) => {
  return (
    <div className="card">
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
    </div>
  );
};

export default Card;
