import "./styles/Navbar.css";
import logo from "../images/isoblanco.png";
import onefoot from "../images/1foot.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar nav">
        <div className="container-fluid flex-column flex-column-res">
          <div className="nav-log-container">
            <img src={logo} className="img-fluid" alt="Logo de la pizarra" />
          </div>
          <div className="nav-log-container logo-one-container">
            <div className="logo-one">
              <img
                src={onefoot}
                className="img-fluid"
                alt="Logo de One Football"
              />
            </div>
            <span className="nav-p">Conectar con el API</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
