import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LogCard from "./components/LogCard";
import { useState } from "react";
import NoCodeCard from "./components/NoCodeCard";
import FetchCard from "./components/FetchCard";

function App() {
  const [token, setToken] = useState(false);

  const [data, setData] = useState(false);

  const [api, setApi] = useState(false);

  const [loading, setLoading] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  const [errores, setError] = useState(false);

  const [form, setForm] = useState(false);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  };

  const handleChange = (e) => {
    setForm(false);
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
                setLoading={setLoading}
                setIsLoaded={setIsLoaded}
                setError={setError}
                loading={loading}
                isLoaded={isLoaded}
                errores={errores}
              />
            </div>
            <div className="right-side">
              <h2>Elige el api</h2>
              {token && (
                <>
                  <NoCodeCard api={api} setApi={setApi} />
                </>
              )}
            </div>
          </div>
          <div className="flex-lado">
            <div className="down-side">
              {token && (
                <>
                  <FetchCard
                    token={token}
                    api={api}
                    data={data}
                    setData={setData}
                    setLoading={setLoading}
                    setIsLoaded={setIsLoaded}
                    setError={setError}
                    loading={loading}
                    isLoaded={isLoaded}
                    errores={errores}
                    handleChange={handleChange}
                    form={form}
                  />
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
