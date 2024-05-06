import React, { useEffect, useState } from "react";
import "./Lista.css";
import { Pagination, Table } from "react-bootstrap";
 import {   TableCompProps } from "../../utils/interfaces";

 
 

// Función para recortar el texto del comentario
const recortarTexto = (texto: string, longitud: number) => {
  if (texto.length > longitud) {
    return texto.substring(0, longitud) + "...";
  } else {
    return texto;
  }
};

const Lista: React.FC<TableCompProps> = ({ lista }) => {
  // const [listaComentarios, setListaComentarios] = useState<Comentario[]>([]);

  useEffect(() => {
    //setListaComentarios(lista) 
  }, [lista]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = lista.length;
  const totalPages = Math.ceil(totalItems / 10);

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const currentItems = lista.slice(startIndex, endIndex);

  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="box-list">
      <h2>Comentarios</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">Email</th>
            <th scope="col">body</th>
            <th scope="col">postId</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((comentario,i:number) => (
            <tr key={i}>
              <th scope="row">{comentario.id}</th>
              <td>{comentario.name}</td>
              <td>{comentario.email}</td>
              <td>{recortarTexto(comentario.body, 20)}</td>
              <td>{comentario.postId}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>{paginationItems}</Pagination>
    </div>
  );
};

export default Lista;
