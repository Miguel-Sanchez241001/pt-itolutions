import React, { useState } from "react";
 import "./Formulario.css";
 interface nuevoComentarioInt {
  title: string,
  body: string,
  userId: number,
}
 interface FormCompProps {
  agregarComentario: (nuevosDatos: nuevoComentarioInt) => void;
}
const Formulario: React.FC<FormCompProps> = ({agregarComentario}) =>{
   const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [userid, setUserid] = useState<number>(0);
 

  const handletitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  
  const handlebodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value); // Convertir el valor a número
    setUserid(value); // Actualizar el estado con el número
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Creación de un objeto basado en la interfaz
const nuevoComentario: nuevoComentarioInt = {
  title: title,
  body: body,
  userId: userid,
};console.log("Previoooooooo")
  console.log({nuevoComentario});
    agregarComentario(nuevoComentario);
    setBody('');
    setTitle('');
    setUserid(0);
  }; 
  
  
  
  
  
  
  
  return ( 
 
      <div className="box-form">
       <h1> Nuevo Comentario</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputNombre1" className="form-label">
          title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNombre1"
            aria-describedby="NombreHelp"
            value={title}
            onChange={handletitleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputbody1" className="form-label">
          body
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputbody1"
            value={body}
            onChange={handlebodyChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">userId</label>
          <input 
            type="number"
            className="form-control" 
            id="fecha" 
            name="fecha" 
            value={userid}  
            onChange={handleUserIdChange}  
          />
        </div>
      
        <button className="btn btn-primary">Registrar</button>
      </form>

      </div>
        
    
    );
}

export default Formulario;