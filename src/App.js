import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { API_KEY } from "./Key";

function App() {
  // state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, guardarConsultar] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      const appId = API_KEY;
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      console.log(resultado);
    };
    consultarAPI();
  }, [consultar]);

  return (
    <>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
