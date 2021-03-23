// import { useState } from "react";

const SendCard = ({ sendD, data }) => {
  return (
    <>
      <div className="card">
        <h3>Conectar con el API</h3>
        <button onClick={sendD}>send</button>
        <ul>
          {data && (
            <>
              {data.map((datos) => (
                <li key={datos._id}>{datos.name}</li>
              ))}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default SendCard;
