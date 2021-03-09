import React, { useState } from "react";

const FormLogin = () => {
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errores, setError] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  console.log(form);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const response = await fetch(
      "https://network-api.onefootball.com/v1/login/",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
        className="form-width"
      >
        <div className="form-group">
          <label>Correo</label>
          <input className="form-control" type="email" name="login" />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input className="form-control" type="password" name="password" />
        </div>
        <button type="submit" className="btn btn-primary button">
          Send
        </button>
      </form>
    </>
  );
};

export default FormLogin;
