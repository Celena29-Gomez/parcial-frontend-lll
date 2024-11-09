import { useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";
import "./App.css";
const App = () => {
  const [cancionData, setCancionData] = useState(null);
  const [error, setError] = useState("");

  const handleFormSubmit = (data) => {
    setCancionData(data);
    setError("");
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setCancionData(null);
  };
  return (
    <div>
      <h1>Cancion favorita 🎧🎵</h1>
      <Form onSubmit={handleFormSubmit} onError={handleError} />
      {error && (
        <span>
          {" "}
          <p style={{ color: "red" }}>{error}</p>{" "}
        </span>
      )}
      {cancionData && (
        <Card title={cancionData.title} description={cancionData.genero}  />
      )}
    </div>
  );
};
export default App;