import React, { useState } from "react";
 import "./Formulario.css";
import { nuevoComentarioInt } from "../../utils/interfaces";

 interface FormCompProps {
  agregarComentario: (nuevosDatos: nuevoComentarioInt) => void;
}
const Formulario: React.FC<FormCompProps> = ({agregarComentario}) =>{
   const [name, setname] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [postId, setpostId] = useState<number>(0);
  const [email, setEmail] = useState<string>('');


  const handlenameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setname(e.target.value);
  };
  
  const handlebodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlepostIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value); // Convertir el valor a número
    setpostId(value); // Actualizar el estado con el número
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Creación de un objeto basado en la interfaz
const nuevoComentario: nuevoComentarioInt = {
  name: name,
  body: body,
  email,
  postId: postId,
};

  console.log("Previoooooooo")
  console.log({nuevoComentario});
    agregarComentario(nuevoComentario);
    setBody('');
    setname('');
    setpostId(0);
  }; 
  
  
  
  
  
  
  
  return ( 
 
      <div className="box-form">
       <h1> Nuevo Comentario</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputNombre1" className="form-label">
          name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNombre1"
            aria-describedby="NombreHelp"
            value={name}
            onChange={handlenameChange}
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
          <label htmlFor="exampleInputbody1" className="form-label">
          email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputbody1"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postId" className="form-label">postId</label>
          <input 
            type="number"
            className="form-control" 
            id="postId" 
            name="postId" 
            value={postId}  
            onChange={handlepostIdChange}  
          />
        </div>
      
        <button className="btn btn-primary">Registrar</button>
      </form>

      </div>
        
    
    );
}

export default Formulario;