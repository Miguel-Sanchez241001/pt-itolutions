  
import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario/Formulario'
import Lista from './components/Lista/Lista'
import Footer from './template/Footer/Footer'
import Navbar from './template/Navbar/Navbar'
import { ENDPOINTS } from './utils/api'
import { Comentario, nuevoComentarioInt } from './utils/interfaces'
import { UseHook } from './Hooks/useHook'

const App:React.FC = () => {
 
  const [comen, setComen] = useState<Comentario>({ id: 0, title: "", body: "", userId: 0 });
  const ListComentar = UseHook(ENDPOINTS.POSTS);


  const agregarComentario = (nuevoComentario: nuevoComentarioInt) => {
    fetch(ENDPOINTS.POSTS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoComentario),
    })
    .then((response: Response) => response.json())
    .then((data: Comentario) => {
    console.log("Data respeusta API");
    console.log({data});
    console.log({comen})
      setComen(data);
        console.log("Actualizacion exitosa")
        console.log({comen});
        const ultimoElemento = ListComentar[ListComentar.length - 1];
          if (data.id<= ultimoElemento.id) {
            data.id = ultimoElemento.id+1;
          }


        ListComentar.push(data);
        
     })
    .catch((error) => {
      alert('Error:'+ error);
    });
    
  };




  return (
    <>
      <Navbar/> 
      <div className="container-box">

      <Formulario agregarComentario={agregarComentario}/>
      
      <Lista lista={ListComentar}     />
      
      </div>
      
      <Footer/>
    </>
  )
}

export default App
