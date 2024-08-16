import React, { useState } from "react";
import Card from "./Card";
import MessageError from "./MessageError";

const Form = () => {
  const [movie, setMovie] = useState({
    name: "",
    description: "",
  });
  const [flag, setFlag] = useState(null);
  //Crear un estado para manejar el renderizado del mensaje de error
  const handleName = (e) => {
    setMovie({ ...movie, name: e.target.value });
  };
  const handleDescription = (e) => {
    setMovie({ ...movie, description: e.target.value });
  };

  const validateByLength = (value, size) => {
    const withoutSpaces = value.trim();
    return withoutSpaces.length >= size;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameValid = validateByLength(movie.name, 3);
    const isDescriptionValid = validateByLength(movie.description, 6);
    let result = null;
    if (!isNameValid || !isDescriptionValid) {
      result = false;
    } else {
      result = true;
    }
    //Realizar validaciones para después mostrar un mensaje de error
    setFlag(result);
  };

  const result = () => {
    if (flag === null)  return <div></div>;
    return flag ? (<Card name={movie.name} description={movie.description} />) : (<MessageError />)
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            value={movie.name}
            onChange={handleName}
            required
          />
        </div>
        <div>
          <label>Descripcion: </label>
          <input
            type="text"
            value={movie.description}
            onChange={handleDescription}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      {result()}
    </div>
  );
};

export default Form;
