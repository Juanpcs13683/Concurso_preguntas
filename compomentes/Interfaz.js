export class Interfaz{
    
    /* Creamos un constructor vacio para inicializar la clase */
    contructor(){}

    /* creamos un metodo llamado muestra pregunta
    para iterar entre las preguntas en el arreglo de datos */
    muestraPregunta(pregunta){
        /* al objeto creado en index.html le asignamos un texto 
        el cual va a ser cada pregunta del arreglo de datos */
        const Titulopregunta = document.getElementById('pregunta');
        Titulopregunta.innerText = pregunta; 
    };

    /* metodo para que crea botones en el div opciones 
    de index.html y muestra cada opcion en un boton */
    muestraOpciones(opciones, callback){
        const contenedorOpciones = document.getElementById('opciones');
        contenedorOpciones.innerText = '';

        /* for que recorreo el arreglo de opciones
        y crea un boton para cada opcion */
        for(let i=0; i<opciones.length; i++){
            const button = document.createElement('button');
            button.innerText = opciones[i];
            button.className = 'button';
            button.addEventListener('click', () => 
            callback(opciones[i]));

            contenedorOpciones.append(button);
        }
    }

    /* metodo que muestra el puntaje */
    muestraPuntaje(puntaje){
        const finTestHTML= `
        <h1>Resultado</h1>
        <h2>Tu Resultado: ${resultado}</h2>`;

        const elemento = document.getElementById('test');
        elemento.innerHTML = finTestHTML;
        
    }

    /* metodo que muestra el progreso */

    muestraPrograso(indiceActual, total){
        const progreso = document.getElementById('progreso');
        progreso.innerHTML = `Pregunta ${indiceActual} de ${total}`;
    }
}