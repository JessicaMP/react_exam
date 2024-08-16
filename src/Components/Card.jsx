import React from "react";

const Card = ({ name, description }) => {
  return (
    <div className="card">
      <h2>Nombre: {name}</h2>
      <p>Descripción: {description}.</p>

      <p className="text-center">Gracias por registrar tu pelicula favorita con nosotros!</p>
    </div>
  );
};

export default Card;
