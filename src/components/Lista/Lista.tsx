import React, { useEffect, useState } from "react";
import "./Lista.css";
import { Pagination, Table } from "react-bootstrap";
import { ENDPOINTS } from "../../utils/api";

interface Comentario {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface TableCompProps {
  actualizar: boolean;
  nuevoComent:Comentario
}

// Función para recortar el texto del comentario
const recortarTexto = (texto: string, longitud: number) => {
  if (texto.length > longitud) {
    return texto.substring(0, longitud) + "...";
  } else {
    return texto;
  }
};

const Lista: React.FC<TableCompProps> = ({ actualizar,nuevoComent }) => {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          ENDPOINTS.POSTS
        );
        const data: Comentario[] = await response.json(); // Especifica el tipo como Comentario[]
        if (nuevoComent.id!== 0) {
            data.push(nuevoComent);
        }
        setComentarios(data);
        console.log("Data actualziada ");
        console.log({data});
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [actualizar]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = comentarios.length;
  const totalPages = Math.ceil(totalItems / 10);

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const currentItems = comentarios.slice(startIndex, endIndex);

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
            <th scope="col">title</th>
            <th scope="col">body</th>
            <th scope="col">userId</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((comentario) => (
            <tr key={comentario.id}>
              <th scope="row">{comentario.id}</th>
              <td>{comentario.title}</td>
              <td>{recortarTexto(comentario.body, 50)}</td>
              <td>{comentario.userId}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>{paginationItems}</Pagination>
    </div>
  );
};

export default Lista;
