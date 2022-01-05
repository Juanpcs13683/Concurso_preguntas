/* creamos una clase con su constructor llamada Pregunta */
export class Pregunta{

    /* constructor para definir atributos de la clase */
    constructor(pregunta, opciones, respuesta){
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
    };

    /* creamos un metodo para saber si la respuesta es correcta 
    tiene como parametro opciones*/
    respuestaCorrecta(opcion){
        /* compara si la opcion elegida es igual a la respuesta y 
        regresa true o false */
        return opcion === this.respuesta;
    };

    
}