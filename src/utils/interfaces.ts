
export interface nuevoComentarioInt {
    title: string,
    body: string,
    userId: number,
  }
  export interface Comentario {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

  
export interface TableCompProps {
    actualizar?: boolean;
    nuevoComent?:Comentario
    lista:Comentario[]

  }