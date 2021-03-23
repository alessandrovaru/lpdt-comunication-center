import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LogCard from "./components/LogCard";
import { useState } from "react";
import NoCodeCard from "./components/NoCodeCard";
import FetchCard from "./components/FetchCard";
import SendCard from "./components/SendCard";

function App() {
  const [token, setToken] = useState(false);

  const [data, setData] = useState(false);

  const [api, setApi] = useState(false);

  const [loading, setLoading] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  const [errores, setError] = useState(false);

  const [send, setSend] = useState(false);

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

  const sendD = async () => {
    const datos = data;
    console.log(datos);
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
              {token && (
                <>
                  <NoCodeCard api={api} setApi={setApi} />
                  {send && <SendCard data={data} sendD={sendD} token={token} />}
                </>
              )}
            </div>
            <div className="right-side">
              {token && (
                <>
                  <h2>Resultado</h2>
                  <FetchCard
                    token={token}
                    api={api}
                    data={data}
                    setSend={setSend}
                    setData={setData}
                    setLoading={setLoading}
                    setIsLoaded={setIsLoaded}
                    setError={setError}
                    loading={loading}
                    isLoaded={isLoaded}
                    errores={errores}
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
