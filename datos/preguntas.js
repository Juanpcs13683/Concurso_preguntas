import {Pregunta} from "../compomentes/Pregunta.js";
import {datos} from "./datos"
/* importamos la clase pregunta desde la carpeta compomentes 
y el arreglo de datos de la carpeta datos*/

/* creamos una arrow function para relacionar los datos del arreglo "datos"
con los parametro que recibe la clase Pregunta */

/* usamos la funcion .map() la cual itera dentro del arreglo y
pasa los parametros requeridos por la clase Pregunta */


export const preguntas = datos.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta));