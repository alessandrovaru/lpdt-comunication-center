import FormLogin from "./FormLogin";
import "./styles/Card.css";

const LogCard = ({ requestOptions, handleChange, setToken }) => {
  return (
    <>
      <div id="log-card" className="card">
        <h3>Conectar con el API de One Footbal</h3>
        <FormLogin
          requestOptions={requestOptions}
          handleChange={handleChange}
          setToken={setToken}
        />
      </div>
    </>
  );
};

export default LogCard;
