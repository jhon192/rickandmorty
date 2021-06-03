import axios from "axios";
import React, { useState } from "react";
import Card from "./components/card";

function App() {
  const [Datos, setDatos] = useState({
    id: "",
    name: "",
    status: "",
    type: "",
    species: "",
    gender: "",
    origin: "",
    location: "",
    img: "",
  });

  const getDatos = (e) => {
    console.log(e);
    axios
      .get(
        `https://rickandmortyapi.com/api/character/${
          Math.floor(Math.random() * 660) + 1
        }`
      )
      .then((result) => {
        console.log(result.data.species)
        setDatos({
          id: result.data.id,
          name: result.data.name,
          status: result.data.status,
          type: result.data.type,
          gender: result.data.gender,
          origin: result.data.origin.name,
          location: result.data.location.name,
          img: result.data.image,
          species: result.data.species
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Card Datos={Datos} getDatos={getDatos} />
    </div>
  );
}

export default App;
