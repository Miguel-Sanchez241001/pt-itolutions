import { useEffect, useState } from 'react';
import { Comentario } from '../utils/interfaces';


export function UseHook(endpoint: string):Comentario[] {
  const [data, setData] = useState<Comentario[]>([]);  

  useEffect(() => {
    fetch(endpoint)
      .then((response:Response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data:Comentario[]) => setData(data))
      .catch((error) => alert(error.message));  

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Aseguramos que se ejecute solo una vez al montar el componente

  return data;
}
