import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>En esta pagina podras conocerme un poco más</h1>
      <Testimonio nombre="Jeff Asto" profesion="Ingeniero de Sistemas" comentario="
Hola mi nombre es Jefferson, pero puedes llamarme Jeff. Esta es mi pagina de introduccion, aquí podras encontrar todos mis proyectos desde los
                mas simples hasta los mas complejos, todo lo vivido en el lindo mundo de la programacion."
                imagen="jeffAstoV"></Testimonio>
      <Testimonio nombre="Jeff Asto V" profesion="Ingeniero de Sistemas" comentario="
Proyecto 1: --------"
                imagen="jeffAsto"></Testimonio>
      </div>
    </div>
  );
}

export default App;
