import { useEffect } from "react";

const FetchCard = ({
  data,
  api,
  token,
  setLoading,
  setIsLoaded,
  setError,
  loading,
  isLoaded,
  errores,
  setSend,
  setData,
}) => {
  useEffect(() => {
    setError(false);
    setIsLoaded(false);
  });

  const sendOneArticle = async (datos) => {
    console.log(datos.name);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token.token}`,
      },
      body: {
        external_id: datos._id,
        source_url: `https://www.lapizarradeldt.com/articulos/${datos.slug}`,
        language: "es",
        published: datos["created-on"],
        modified: "2010-01-02T15:04:05Z",
        content: datos.content,
        title: datos.name,
        image_url: datos["imagen-simple"].url,
        draft: true,
      },
    };
    console.log(requestOptions);
  };

  const fetchC = async (e) => {
    setLoading(true);
    console.log(loading);
    try {
      const response = await fetch(api.api);
      const dataResponse = await response.json();
      if (response.ok) {
        console.log("worked");
        setSend(true);
        setLoading(false);
      } else {
        throw Error(dataResponse.message);
      }
      setData(dataResponse.items);
    } catch (error) {
      setError({ error: true, msg: error.message });
      setLoading(false);
      console.log(error);
    }
  };

  if (isLoaded && errores === false) {
    const fetchCard = document.getElementById("fetch-card");
    console.log(fetchCard);
  } else if (errores) {
  }
  return (
    <>
      <div id="fetch-card" className="card">
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
                      <button onClick={() => sendOneArticle(datos)}>
                        Enviar
                      </button>
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
            {loading && <p>Cargando</p>}

            {errores && <p>Error: {errores.msg}</p>}
          </>
        )}
      </div>
    </>
  );
};

export default FetchCard;
