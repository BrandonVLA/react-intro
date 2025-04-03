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
  return (
    <>
    <div className="App">
      <header className="App-header">
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
    </div>
    <HelloWorld />
    </>
  );
}

export default App;
