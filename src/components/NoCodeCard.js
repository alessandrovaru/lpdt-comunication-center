const NoCodeCard = ({ api, setApi }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const valueURL = document.getElementById("apiURL").value;
    console.log(valueURL);
    await setApi({
      api: valueURL,
    });
  };
  return (
    <>
      <div className="card">
        <h3>Elegir el API</h3>
        <p>Esta lista te permite conectar con NoCodeAPI</p>
        <form onSubmit={handleSubmit} className="form-width">
          <div className="form-group">
            <label>
              https://v1.nocodeapi.com/alessandrovaru/webflow/OUPdqnoYfgMNPlYm
            </label>
            <input id="apiURL" type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary button">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default NoCodeCard;
