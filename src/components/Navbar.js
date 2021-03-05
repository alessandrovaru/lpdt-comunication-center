import "./styles/Navbar.css";
import logo from "../images/isoblanco.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar nav">
        <div className="container-fluid">
          <img className="img-fluid logo" src={logo} alt="Logo de la pizarra" />
          <span>La Pizarra del DT Network</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
