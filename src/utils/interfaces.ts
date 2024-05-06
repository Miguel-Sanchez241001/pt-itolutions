
export interface nuevoComentarioInt {
  name: string;
  email: string;
  body: string;
  postId: number;
  }
  export interface Comentario {
    id: number;
    name: string;
    email: string;
    body: string;
    postId: number;
  }
 
  
export interface TableCompProps {
    actualizar?: boolean;
    nuevoComent?:Comentario
    lista:Comentario[]

  }