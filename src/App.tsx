  
import './App.css'
import Formulario from './components/Formulario/Formulario'
import Lista from './components/Lista/Lista'
import Footer from './template/Footer/Footer'
import Navbar from './template/Navbar/Navbar'

const App:React.FC = () => {
 
  return (
    <>
      <Navbar/> 
      <div className="container">

      <Formulario/>
      
      <Lista />
      
      </div>
      
      <Footer/>
    </>
  )
}

export default App
