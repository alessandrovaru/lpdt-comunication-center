import FormLogin from "./FormLogin";
import "./styles/Card.css";

const LogCard = ({
  requestOptions,
  handleChange,
  setToken,
  setLoading,
  setIsLoaded,
  setError,
  loading,
  isLoaded,
  errores,
}) => {
  return (
    <>
      <div id="log-card" className="card">
        <h3>Conectar con el API de One Footbal</h3>
        <FormLogin
          requestOptions={requestOptions}
          handleChange={handleChange}
          setToken={setToken}
          setLoading={setLoading}
          setIsLoaded={setIsLoaded}
          setError={setError}
          loading={loading}
          isLoaded={isLoaded}
          errores={errores}
        />
      </div>
    </>
  );
};

export default LogCard;
