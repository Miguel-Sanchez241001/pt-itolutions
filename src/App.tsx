  
import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario/Formulario'
import Lista from './components/Lista/Lista'
import Footer from './template/Footer/Footer'
import Navbar from './template/Navbar/Navbar'

interface nuevoComentarioInt {
  title: string,
  body: string,
  userId: number,
}
interface Comentario {
  id: number;
  title: string;
  body: string;
  userId: number;
}
const App:React.FC = () => {
  const [actualizar, setActualizar] = useState<boolean>(false); // Control de renderizar componente

  const [comen, setComen] = useState<Comentario>({ id: 0, title: "", body: "", userId: 0 });



  const agregarComentario = (nuevoComentario: nuevoComentarioInt) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoComentario),
    })
    .then((response: Response) => response.json())
    .then((data: Comentario) => {
      setComen(data);
      console.log(data);
    })
    .catch((error) => {
      alert('Error:'+ error);
    })
    .finally(() => {
      setActualizar(!actualizar);
    });
    
  };




  return (
    <>
      <Navbar/> 
      <div className="container-box">

      <Formulario agregarComentario={agregarComentario}/>
      
      <Lista nuevoComent={comen} actualizar={actualizar}/>
      
      </div>
      
      <Footer/>
    </>
  )
}

export default App
