import logo from './logo.svg';
import './App.css';

// #1 Los componentes son funciones que retornan HTML
// #2 Recordar los parentesis
// #3 Clases de CSS van con className
// #4 Referencias a JS van dentro de llaves { }
// #5 Esas llaves sustituyen el v-bind o las {{ }} de vue


function HelloWorld() {
    const nombre= "Brandon Daniel";
  return( 
      <div className="App App-header">
        <p>
          Hello {nombre}
        </p>
      </div>
  );
}

function App() {
  const logotipo = logo; 

  const mostrarImagen = true;

  const contador = 5;

  //si el contador es menor a 5,
  // imprimir un mensaje "El contador es menor a 5"
  //si el contador es mayor a 5,
  // imprimir un mensaje "El contador es mayor a 5"
  
  return (
    <>
    <div className="App">
      <header className="App-header">
      {mostrarImagen && <span>Hola</span>}
        <img src={logotipo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
          {/* Codigo react */}
        {mostrarImagen ? <img src={logotipo} className="App-logo" alt="logo" /> 
        : 'No Hay Imagen Para Mostrar'}
        
          {/* Codigo Vue */}
        {/* <img v-if="mostrarImagen" src={logotipo} className="App-logo" alt="logo" /> */}
    </div>
      <div> 
        {contador < 5? 'El contador es menor a 5 ' : 'El contador es mayor a 5'}
      </div>
    </div>
    <HelloWorld />
    </>
  );
}

export default App;
