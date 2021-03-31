import { useState, useEffect } from "react";

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
  setData,
  handleChange,
  form,
}) => {
  const [articleExists, setArticleExists] = useState(false);
  const [borrado, setBorrado] = useState(false);
  const [notExists, setNotExists] = useState(false);
  const [slugState, setSlugState] = useState(false);
  const [buscado, setBuscado] = useState(false);
  const [sent, setSend] = useState(false);

  useEffect(() => {
    setError(false);
    setIsLoaded(false);
  });

  const sendOneArticle = async (datos) => {
    setBorrado(false);
    console.log(datos.name);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify({
        external_id: datos._id,
        source_url: `https://shielded-fjord-34653.herokuapp.com/https://www.lapizarradeldt.com/articulos/${datos.slug}`,
        language: "es",
        published: datos["created-on"],
        modified: datos["updated-on"],
        content: datos.contenido,
        title: datos.name,
        image_url: datos["imagen-simple"].url,
        image_width: 800,
        image_height: 369,
        draft: false,
      }),
    };
    const response = await fetch(
      "https://shielded-fjord-34653.herokuapp.com/https://network-api.onefootball.com/v1/posts/",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    setNotExists(false);
    setSend(true);
    console.log(sent);
    await getOneArticle(datos._id);
    console.log(requestOptions);
  };

  const getOneArticle = async (id) => {
    setBorrado(false);
    setNotExists(false);
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token.token}`,
    };

    const response = await fetch(
      `https://shielded-fjord-34653.herokuapp.com/https://network-api.onefootball.com/v1/posts/?external_id=${id}`,
      { headers }
    );
    const data = await response.json();
    console.log(data);

    if (JSON.stringify(data) === '{"posts":[]}') {
      console.log("no existe");
      setArticleExists(false);
      setNotExists(true);
    } else {
      setArticleExists({
        id: data.posts[0].id,
        external_id: data.posts[0].external_id,
      });
      setNotExists(false);
      console.log("Si existe");
    }
    setBuscado(true);
    console.log(notExists);
  };

  const deleteOneArticle = async (id) => {
    await getOneArticle(id);

    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    };

    const response = await fetch(
      `https://shielded-fjord-34653.herokuapp.com/https://network-api.onefootball.com/v1/posts/${articleExists.id}`,
      requestOptions
    );
    const data = await response.text();
    if (response.ok) {
      setBorrado(true);
      setNotExists(true);
      setArticleExists(false);
    } else {
      setBorrado(false);
      setNotExists(false);
      setArticleExists(true);
    }

    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    setLoading(true);
    setNotExists(false);
    setArticleExists(true);
    setBuscado(false);

    try {
      const response = await fetch(api.api);
      const dataResponse = await response.json();
      if (response.ok) {
        console.log("worked");
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
    let slugCutted = form.articleUrl.slice(41);
    setSlugState(slugCutted);

    console.log(slugState);
    console.log(notExists, "no");
    console.log(articleExists);
  };

  if (isLoaded && errores === false) {
    const fetchCard = document.getElementById("fetch-card");
    console.log(fetchCard);
  } else if (errores) {
  }
  return (
    <>
      <div id="fetch-card" className="card">
        <p>
          El token que nos ha generado el API de OneFootbal es el siguiente:{" "}
          <span className="bold">{token.token}</span>. Esto, nos servirá por una
          semana
        </p>
        {api && (
          <>
            <h3>Notas:</h3>
            <hr />
            <div className="search-wrapper">
              <div className="left-side">
                <form onChange={handleChange}>
                  <div className="form-group">
                    <label>Agrega la url</label>
                    <input
                      className="form-control"
                      type="text"
                      name="articleUrl"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-primary button"
                  >
                    Buscar
                  </button>
                </form>
              </div>

              {data && (
                <>
                  <div className="notas-container">
                    {data
                      .filter((data) => data.slug === slugState)
                      .map((datos) => (
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
                          {articleExists ? (
                            <>
                              <p>Si existe</p>
                              {articleExists.external_id === datos._id ? (
                                <>
                                  {borrado ? (
                                    <></>
                                  ) : (
                                    <>
                                      <button
                                        className="btn btn-primary button"
                                        onClick={() =>
                                          deleteOneArticle(datos._id)
                                        }
                                      >
                                        Borrar
                                      </button>
                                    </>
                                  )}
                                </>
                              ) : (
                                <></>
                              )}
                            </>
                          ) : (
                            <>
                              {notExists === true && (
                                <>
                                  <p>no existe</p>
                                  <button
                                    className="btn btn-primary button"
                                    onClick={() => sendOneArticle(datos)}
                                  >
                                    Enviarlo
                                  </button>
                                </>
                              )}
                            </>
                          )}
                          {buscado ? (
                            <></>
                          ) : (
                            <>
                              <button
                                className="btn btn-primary button"
                                onClick={() => getOneArticle(datos._id)}
                              >
                                Existe en OneFootbal?
                              </button>
                            </>
                          )}

                          {/* <p>{datos.contenido}</p> */}
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
            {/* <p>Este es el link generado por NoCodeAPI: {api.api}</p> */}

            {loading && <p>Cargando</p>}

            {errores && <p>Error: {errores.msg}</p>}
          </>
        )}
      </div>
    </>
  );
};

export default FetchCard;
