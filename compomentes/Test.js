// @ts-check

import { Pregunta } from "./Pregunta.js";
export class Test{
    indicePregunta = 0;
    puntaje = 0;


    /**
     * 
     * @param {Pregunta[]} preguntas 
     */
    constructor(preguntas){
        this.preguntas = preguntas;
    };


    /**
     * 
     * @returns {Pregunta} the question found
     */
    getIndicePregunta(){
        return this.preguntas[this.indicePregunta];
    };

    terminado(){
        return this.preguntas.length === this.indicePregunta; 
        /* compara la longitud del arreglo */
    }

    respuestaIncorrecta(respuesta){
 
    }
    /**
     * 
     * @param {String} respuesta 
     */
    seleccion(respuesta){
        console.log(respuesta)
        if(this.getIndicePregunta().respuestaCorrecta(respuesta)){
            this.puntaje++;
        }
   

        this.indicePregunta++;
    };
}

