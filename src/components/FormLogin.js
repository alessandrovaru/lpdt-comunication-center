import React, { useState } from "react";

const FormLogin = () => {
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errores, setError] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  };

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
      if (!response.ok) throw Error(data.message);
      console.log(data);
    } catch (error) {
      setError({ error: true, msg: error.message });
      console.log(error);
    }
  };

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
        {errores && <p>eror: {errores.msg}</p>}
      </form>
    </>
  );
};

export default FormLogin;
