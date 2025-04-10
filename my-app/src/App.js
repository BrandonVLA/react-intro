import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// #1 Los componentes son funciones que retornan HTML
// #2 Recordar los parentesis
// #3 Clases de CSS van con className
// #4 Referencias a JS van dentro de llaves { }
// #5 Esas llaves sustituyen el v-bind o las {{ }} de vue

function HelloWorld() {
  const nombre = "Brandon";
  return (
    <div className="App App-header">
      <p>Hello {nombre}</p>
    </div>
  );
}

const entrada = ["a", "b", "c"];

const parrafos = entrada.map((elemento) => {
  return (
    <div>
      <h1>Estos son los elementos:</h1>
      <p>{elemento}</p>
    </div>
  );
});

function App() {
  const logotipo = logo;

  const mostrarImagen = true;

  const contador = 1;

  //--------------------------------------------Inicio-Ejercicio de Tarea---------------------------------------------------------

  const opcionesMenu = [
    { id: 1, texto: "Code ", link: "/Code", icono: "", isSelected: true },
    { id: 2, texto: "Issues ", link: "/issues", icono: "", isSelected: false },
    { id: 3, texto: "Pull Request ", link: "/pulls", icono: "", isSelected: false, },
  ];

  const [seleccionadoId, setSeleccionadoId] = useState('hola'); //paso #1 //Se usa useState(1) para marcar como predeterminado el id(en este caso el id #1) de los objetos de arriba

  const menu = opcionesMenu.map((elemento) => {
    
    return (
      // se muestra a pantalla usando return y llamando la variable menu dentro del componente App()
      <div
        key={elemento.id} 
        onClick={() => setSeleccionadoId(elemento.id)}  // cuando se da click a otro o al mismo texto(boton), cambia o mantiene el nuevo id del elemento aplicando los estilos de abajo
        style={{
          cursor: "pointer",
          fontWeight: elemento.isSelected ? "normal" : "normal",
          color: elemento.isSelected ? "blue" : "black",
        }}
      >
        <a href={`#${elemento.link}`}>
          {elemento.texto}
          {elemento.id === seleccionadoId && <b>*</b>}
        </a>
      </div>
    );
  });
  //--------------------------------------------Fin-Ejercicio de Tarea---------------------------------------------------------

  //si el contador es menor a 5,
  // imprimir un mensaje "El contador es menor a 5"
  //si el contador es mayor a 5,
  // imprimir un mensaje "El contador es mayor a 5"
  let [contadorValor, setcontadorValor] = useState(0);

  function incrementarContador() {
    setcontadorValor(contadorValor + 1);
  }

  function decrementarContador() {
    setcontadorValor(contadorValor - 1);
  }

  function incrementarContadorxDiez() {
    setcontadorValor(contadorValor += 10);
  }

  function decrementarContadormenosDiez() {
    setcontadorValor(contadorValor - 10);
  }
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
          {mostrarImagen ? (
            <img src={logotipo} className="App-logo" alt="logo" />
          ) : (
            "No Hay Imagen Para Mostrar"
          )}

          {/* Codigo Vue */}
          {/* <img v-if="mostrarImagen" src={logotipo} className="App-logo" alt="logo" /> */}
        </div>
        <div className="contador-div">
          {/* if (contador < 5) {
          alert('El contador es menor a 5'); */}
          <h2>"Verificador de Mayor o Menor que"</h2>
          {contador < 5
            ? "El contador es menor a 5 "
            : "El contador es mayor a 5"}
          <br></br>
          {contador === 5
            ? "El contador es igual a 5"
            : "El contador no es igual a 5"}
        </div>
        <div>
          {parrafos}
          <h1>Estos son los elementos del menu</h1>
          {menu}
        </div>
      </div>
      <HelloWorld />

      <div className="alineado">
        <h1>Contador de Clicks: {contadorValor}</h1>
        <div>
          <button className="botonesAgregarClics" onClick={decrementarContador}>Decrementar</button>
          <button className="botonesAgregarClics" onClick={decrementarContadormenosDiez}>Decrementar (-10)</button>
          <button className="botonesAgregarClics" onClick={incrementarContador}>Incrementar</button>
          <button className="botonesAgregarClics" onClick={incrementarContadorxDiez}>Incrementar (+10)</button>
        </div>
      </div>
    </>
  );
}

export default App;
