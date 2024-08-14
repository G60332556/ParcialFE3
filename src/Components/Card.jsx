import React from "react";

const Card = ({nombre, materia}) => {
  return (
    <div>
      <h3>Para el  Alumno {nombre} </h3> 
      <h3>su materia favorita es {materia} </h3>
      
    </div>
  )

}

export default Card;