const FormLogin = ({
  requestOptions,
  handleChange,
  setToken,
  setLoading,
  setIsLoaded,
  isLoaded,
  setError,
  loading,
  errores,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(
        "https://shielded-fjord-34653.herokuapp.com/https://network-api.onefootball.com/v1/login/",
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
    } catch (error) {
      setError({ error: true, msg: error.message });
      console.log(error);
    }
  };

  if (isLoaded && errores === false) {
    const logCard = document.getElementById("log-card");
    logCard.style.border = "2px solid green";
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
          <label>Correos</label>
          <input className="form-control" type="email" name="login" />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
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
