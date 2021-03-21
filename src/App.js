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

  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const [send, setSend] = useState(false);

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

  const fetchC = async () => {
    const response = await fetch(api.api);
    const dataResponse = await response.json();
    if (response.ok) {
      console.log("worked");
      setSend(true);
    } else {
      throw Error(dataResponse.message);
    }
    setData(dataResponse.items);
    console.log(data);
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
                  {send && <SendCard />}
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
                    fetchC={fetchC}
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
