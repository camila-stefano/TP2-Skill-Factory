const Pagination = ({ prev, next, onPrev, onNext }) => {
  // // Las propiedades 'prev' y 'next' estan dentro del objeto 'info' pero solo existen en la busqueda convencional o por filtro,
  //  no para la peticion 'get multiple characters'. Usar para la paginacion de la busqueda por nombre.

  const handlePrev = () => {
    console.log("Handling Prev!");
    onPrev();
  };
  const handleNext = () => {
    console.log("Handling Next!");
    onNext();
  };

  return (
    <div className="pagination">
      {prev ? (
        <button
          onClick={() => {
            handlePrev();
          }}
        >
          Previous
        </button>
      ) : null}
      {next ? (
        <button
          onClick={() => {
            handleNext();
          }}
        >
          Next
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
