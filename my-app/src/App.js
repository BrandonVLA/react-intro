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
  {
    id: 3,
    texto: "Pull Request ",
    link: "/pulls",
    icono: "",
    isSelected: false,
  },
];

const [seleccionadoId, setSeleccionadoId] = useState(1); //paso #1 //Se usa useState(1) para marcar como predeterminado el id:1 de los objetos de arriba 

const menu = opcionesMenu.map((elemento) => {
  const isSelected = seleccionadoId === elemento.id; //paso #2 // se evalua si el seleccionadoId que es el valor actual del texto que esta seleccionado(al inicio es 1 por el useState) si es igual al elemento que esta siendo seleccioonado se marca como true, sino es false

  return ( // se muestra a pantalla usando return y llamando la variable menu dentro del componente App()
    <div
      key={elemento.id}
      onClick={() => setSeleccionadoId(elemento.id)} // cuando se da click a otro o al mismo texto(boton), cambia o mantiene el nuevo id del elemento aplicando los estilos de abajo
      style={{
        cursor: "pointer",
        fontWeight: isSelected ? "bold" : "normal",
        color: isSelected ? "blue" : "black",
      }}
    >
      <p>
        {elemento.texto}
        {isSelected && <b>*</b>}
      </p>
    </div>
  );
});
//--------------------------------------------Fin-Ejercicio de Tarea---------------------------------------------------------

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
    </>
  );
}

export default App;
