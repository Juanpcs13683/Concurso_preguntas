/* importamos los datos  */
import { preguntas } from "./datos/preguntas.js";
import { Test } from "./compomentes/Test.js";
import {Interfaz} from "./compomentes/Interfaz.js";

/* creamos un metodo main para correr el test */
function main(){
    const test = new Test(preguntas);/* creamos un nuevo objeto Test y
    le pasamos como parametro el arreglo preguntas */

    /* creamos un nuevo objeto de interfaz */
    const interfaz = Interfaz();
};

/* creamos un metodo para mostrar los metodos de cada clase */
const Pagina= (test, interfaz) => {
    if(test.terminado()){
        interfaz.muestraPuntaje(test.puntaje);
    }else{
        interfaz.muestraPregunta(test.getIndicePregunta().text); 
        /* toma el testo de la pregunta actual dada por el metodo getIndicePregunta(), lo pasa com parametro al metodo
        muestraPregunta como texto  */
        interfaz.muestraOpciones(test.getIndicePregunta().opciones, (Opcionactual) =>{
            test.seleccion(Opcionactual);
            /* hacemos recurion del metodo Pagina */
            Pagina(test, interfaz);
        });
        interfaz.muestraProgreso(test.IndicePregunta+1, test.preguntas.length);
    }
};

/* invocamos el metodo main  */
main();