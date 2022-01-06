export class Interfaz{
    constructor(){}


    /**
     * 
     * @param {String} pregunta question to render 
     */
    muestraPregunta(pregunta){
        const tituloPregunta = document.getElementById('pregunta');
        tituloPregunta.innerText = pregunta;

    }

    /**
     * 
     * @param {String[]} opciones the choices of the question 
    */
    muestraOpciones(opciones, callback){
        const contenedorOpciones = document.getElementById('opciones');
        contenedorOpciones.innerHTML = '';

        for(let i=0;i<opciones.length;i++ ){
            const button = document.createElement('button');
            button.innerText = opciones[i];
            button.className = 'button';
            button.addEventListener('click', () => callback(opciones[i]));

            contenedorOpciones.append(button);
        }
     
    }

    /* funcion para el puntaje */

    /**
     * 
     * @param {number} puntaje the total score 
     */
    muestraPuntaje(puntaje){
        const finalTestHTML = `
        <h1>Resultado</h1>
        <h2>Tu Puntaje: ${puntaje}</h2>
        `
        const elemento = document.getElementById('test');
        elemento.innerHTML = finalTestHTML;
    }

    /* metodo showprogress */
    /**
     * 
     * @param {number} indiceActual the current index of the quiz
     * @param {number} total total questions number 
     */
    muestraProgreso(indiceActual, total){
        const elemento = document.getElementById('progreso');
        elemento.innerHTML = `Pregunta ${indiceActual} de ${total}`;
    }
} 