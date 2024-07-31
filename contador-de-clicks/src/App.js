import './App.css';
import freecodecamp from './imagenes/mylifeforthecode.jpeg'
import Boton from './componentes/boton';
import Contador from './componentes/contador.js'
import { useState } from 'react';

function App() {
  const[numClics, setNumClics]= useState(0)
   

  const manejarClic= () =>{
    setNumClics(numClics+1)
  }

  const reinciarContador = () =>{
    setNumClics(0)
  }


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freecodecamp} alt="Logo de free"></img>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}></Contador>
        <Boton texto="Clic"
        esBotonDeClic={true}
        manejarClic={manejarClic}
        ></Boton>
        <Boton texto="reinciar"
        esBotonDeClic={false}
        manejarClic={reinciarContador}
        >

        </Boton>
      </div>
    </div>
  );
}

export default App;
