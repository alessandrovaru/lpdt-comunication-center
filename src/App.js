import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="dash">
        <Navbar />
        <div className="cuerpo">
          <h2>Tablero</h2>
          <div className="flex-lado">
            <Card />
            <div className="card">
              <h3>Conectar con el API</h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
