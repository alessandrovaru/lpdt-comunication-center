import React, { useState } from "react";

const FormLogin = ({ requestOptions, handleChange, setToken }) => {
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errores, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(
        "https://network-api.onefootball.com/v1/login/",
        requestOptions
      );
      const data = await response.json();
      setLoading(false);
      setIsLoaded({ tkn: data.access_token });
      if (response.ok) {
        setToken({ token: data.access_token });
      } else {
        throw Error(data.message);
      }
      console.log(data);
    } catch (error) {
      setError({ error: true, msg: error.message });
      console.log(error);
    }
  };

  if (isLoaded && errores === false) {
    const logCard = document.getElementById("log-card");
    logCard.style.border = "2px solid green";
    console.log(logCard);
  } else if (errores) {
    const logCard = document.getElementById("log-card");
    logCard.style.border = "2px solid red";
  }

  return (
    <>
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
        className="form-width"
      >
        <div className="form-group">
          <label>Correol.ortega@lapizarradeldt.com</label>
          <input className="form-control" type="email" name="login" />
        </div>
        <div className="form-group">
          <label>ContraseñaVenezuela3233@</label>
          <input className="form-control" type="password" name="password" />
        </div>
        <button type="submit" className="btn btn-primary button">
          Send
        </button>
        {loading && <p>Cargando</p>}

        {errores && <p>Error: {errores.msg}</p>}
      </form>
    </>
  );
};

export default FormLogin;
