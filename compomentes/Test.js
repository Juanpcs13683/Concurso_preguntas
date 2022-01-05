import { Pregunta } from "./Pregunta.js";

/* Creamos la clase Test */
export class Test{

    indicePregunta = 0;
    puntaje = 0;

    /* constructor que tiene como parametro el objeto preguntas */
    constructor(preguntas){
        this.preguntas = preguntas;
    };

    /* Metodo para saber el indice de la pregunta */
    getIndicePregunta(){
        return this.preguntas[this.indicePregunta];
    };

    /* Metodo para saber si termino con las preguntas */
    /* hay que hacer uno diferente por si la respuesta esta mal */
    terminado(){
        return this.preguntas.length === this.indicePregunta;
    };

    /* metodo que espera la seleccion de una respuesta */
    seleccion(respuesta){
        if(this.getIndicePregunta().respuestaCorrecta()){
            this.puntaje++;
        }/* aqui debo hacer el metodo que pregunte */
        this.indicePregunta++;
    }
}