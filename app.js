// @ts-check
import {preguntas} from "./datos/preguntas.js";
import {Test} from "./compomentes/Test.js";
import {Interfaz} from "./compomentes/Interfaz.js"

/**
 * 
 * @param {Test} test the main quiz object
 * @param {Interfaz} interfaz ui object 
 */

const renderPage = (test, interfaz) => {
  if(test.terminado()){
      console.log(test.puntaje);
      interfaz.muestraPuntaje(test.puntaje);
  }else{
    interfaz.muestraPregunta(test.getIndicePregunta().pregunta);
    interfaz.muestraOpciones(test.getIndicePregunta().opciones, (opcionActual) => {
    test.seleccion(opcionActual)
    renderPage(test, interfaz);
    });
    interfaz.muestraProgreso(test.indicePregunta+1, test.preguntas.length); /* cantidad de preguntas totales e indice actual */
  }

};

/* import {data} from "./components/Question.js";  */
function main() {
    const test = new Test(preguntas);
    const interfaz = new Interfaz();

    renderPage(test, interfaz);

}

main();