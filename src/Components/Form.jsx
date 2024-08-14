import { useState } from "react";
import Card from "./Card";

const Form = ()  => {
    const [nombre, setNombre] = useState("");
    const [materia, setMateria] = useState("");
    const [error, setError] = useState(false);
    const [enviar, setEnviar] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim().length > 3 && 
            materia.length > 5) {
            setError(false);
            setEnviar(true);
        } else{
            setError(true);
            setEnviar(false);
        }
    };
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
        
            <label>Nombre Alumno : </label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
  
            <label>Materia: </label>
            <input type="text" value={materia} onChange={(e) => setMateria(e.target.value)} />
    
        <button type="submit">Resgistrar Alumnos / Materia Favorita</button>

        </form>
        {error && <p>Por favor chequea que la Información sea Correcta </p>}
        {enviar && !error && <Card nombre={nombre} materia={materia}/>} 

    </div>

  );
}

export default Form
