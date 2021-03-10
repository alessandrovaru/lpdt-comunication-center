import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LogCard from "./components/LogCard";
import { useState } from "react";
import NoCodeCard from "./components/NoCodeCard";

function App() {
  const [token, setToken] = useState(false);
  const [api, setApi] = useState({});
  const [form, setForm] = useState({
    login: "",
    password: "",
  });
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="dash">
        <Navbar />
        <div className="cuerpo">
          <div className="flex-lado">
            <div className="left-side">
              <h2>Tablero</h2>
              <LogCard
                requestOptions={requestOptions}
                handleChange={handleChange}
                setToken={setToken}
                token={token}
              />
              {token && (
                <>
                  <NoCodeCard api={api} setApi={setApi} />
                  <div className="card">
                    <h3>Conectar con el API</h3>
                  </div>
                </>
              )}
            </div>
            <div className="right-side">
              {token && (
                <>
                  <h2>Resultado</h2>
                  <div className="card">
                    <h3>El Token es:</h3>
                    <hr />
                    <p>
                      El token que nos ha generado el API de OneFootbal es el
                      siguiente: <span className="bold">{token.token}</span>.
                      Esto, nos servirá por una semana
                    </p>
                    {api && (
                      <>
                        <h3>Notas:</h3>
                        <hr />
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
