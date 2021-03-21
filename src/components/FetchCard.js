const FetchCard = ({ data, api, fetchC, token }) => {
  return (
    <>
      <div className="card">
        <h3>El Token es:</h3>
        <hr />
        <p>
          El token que nos ha generado el API de OneFootbal es el siguiente:{" "}
          <span className="bold">{token.token}</span>. Esto, nos servirá por una
          semana
        </p>
        {api && (
          <>
            <h3>Notas:</h3>
            <hr />
            <p>Este es el link generado por NoCodeAPI: {api.api}</p>
            {data && (
              <>
                <div className="notas-container">
                  {data.map((datos) => (
                    <div className="nota-card" key={datos._id}>
                      <img
                        src={
                          datos["imagen-simple"]
                            ? datos["imagen-simple"].url
                            : JSON.stringify(datos["imagen-simple"])
                        }
                        className="img-fluid"
                        alt="foto de-la-nota"
                      />
                      <h3>{datos.name}</h3>
                      {/* <p>{datos.contenido}</p> */}
                    </div>
                  ))}
                </div>
              </>
            )}
            <button
              onClick={fetchC}
              type="submit"
              className="btn btn-primary button"
            >
              Buscar
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default FetchCard;
