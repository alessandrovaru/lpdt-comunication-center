import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import onefoot from "./images/1foot.png";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="cuerpo">
          <div className="card">
            <img
              src={onefoot}
              className="img-fluid logo-one"
              alt="Logo de One Football"
            />
            <h3>Conectar con el API</h3>
            <form className="form-width">
              <div className="form-group">
                <label>Nombre</label>
                <input className="form-control" type="text" name="firstName" />
              </div>
              <div className="form-group">
                <label>Apellido</label>
                <input className="form-control" type="text" name="lastName" />
              </div>
              <button className="btn btn-primary button">Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
