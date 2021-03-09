import FormLogin from "./FormLogin";
import "./styles/Card.css";

const Card = () => {
  return (
    <>
      <div className="card">
        <h3>Conectar con el API</h3>
        <FormLogin />
      </div>
    </>
  );
};

export default Card;
