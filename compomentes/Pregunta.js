export class Pregunta{


    /*Comentarios para pasar que tipo de informacion espera  */
    /**
     * 
     * @param {String} pregunta este es el texto de la pregunta 
     * @param {String[]} opciones  estas son las opciones de la pregunta
     * @param {String} respuesta esta es la respuesta de la pregunta 
     */ 
    
    
    
    /* constructor de atributos de clase */
    constructor(pregunta, opciones, respuesta){
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
    };

    /**
     * 
     * @param {String} opcion this return some text
     * @returns {boolean} returns true if anwers is correct
     */

    /* metodos de la clase */
    respuestaCorrecta(opcion) {
        return opcion === this.respuesta;
    }
}

/* llamando a la clase */
/* const question = new Question("cual es x cosa", ['aflka', 'kjasfkl', 'alkjdfa'], 'aflka');
console.log(question);
 */