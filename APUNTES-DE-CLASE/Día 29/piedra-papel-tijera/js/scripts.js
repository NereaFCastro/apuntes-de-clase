// 1. DECLARAMOS VARAIBLES
const txtResultado = document.querySelector(".txtResultado");
const txtEstadisticas = document.querySelector(".txtEstadisticas");

    //gráfica de barras

const txtGanadas = document.getElementById("ganadas");
const txtPerdidas = document.getElementById("perdidas");
const txtEmpatadas = document.getElementById("empatadas");

const progressBar = document.querySelector(".progressBar");
const divGanadas = document.querySelector(".progressBar>div:nth-child(1)");
const divPerdidas = document.querySelector(".progressBar>div:nth-child(2)")

const objPuntaje= {
    //puntuación del juego
    ganadas: 999,
    perdidas: 999,
    empatadas: 999,
    stats: {
        // estadisticas de la IA
        ai_piedra: 999,
        ai_papel: 999,
        ai_tijera: 999,

        //estadóisticas del jugador
        user_piedra: 999,
        user_papel: 999,
        user_tijera: 999,
    }


}



// 2. DECLARAMOS FUNCIONES



/**
 * Función que recibe lo que elije el jugador y le indica si gana o pierde
 * @param {string} jugador -"piedra","papel","tijera"
 * @return {void}
 */

function jugar(jugador){
    const jugadorIA=elegirAutomaticamente(); //Tirará automáticamente
    let resultado="";

    if(jugadorIA == jugador){
        resultado = "Empataste";
    }else if (jugador == "piedra"){
        resultado= (jugadorIA =="papel") ? "Perdiste" : "Ganaste";

    }else if(jugador == "papel"){
        resultado= (jugadorIA =="tijera") ? "Perdiste" : "Ganaste";

    }else if(jugador == "tijera"){
        resultado= (jugadorIA =="piedra") ? "Perdiste" : "Ganaste";

    }

    //actualiza las estadisticas de IA (Cuantas veces tiro piedra papel y tijeras)
    if(jugadorIA == "piedra"){objPuntaje.stats.ai_piedra++;}
    if(jugadorIA == "papel"){objPuntaje.stats.ai_papel++;}
    if(jugadorIA == "tijera"){objPuntaje.stats.ai_tijera++;}
    //actualiza las estadisticas de Jugador (Cuantas veces tiro piedra papel y tijeras)
    if(jugador == "piedra"){objPuntaje.stats.user_piedra++;}
    if(jugador == "papel"){objPuntaje.stats.user_papel++;}
    if(jugador == "tijera"){objPuntaje.stats.user_tijera++;}

    //actualizar las partidas
    if(resultado=="Perdiste"){
        //objPuntaje.perdidas = objPuntaje.perdidas +1; (Es lo mismo que lo de abajo)
        objPuntaje.perdidas++;
    }
    if(resultado=="Ganaste"){objPuntaje.ganadas++;}
    if(resultado=="Empataste"){objPuntaje.empatadas++;}


    //Imprimir resultado
    txtResultado.innerHTML = `<h1>${resultado}</h1> Tu has tirado <b>${jugador}</b> y la IA ha tirado <b>${jugadorIA}</b>`; //En un principio txtResultado estaba vacío con esto hemos modificado desde js lo que se verá 
    
    mostrarEstadisticas();
    

}

  

function elegirAutomaticamente(){
    const opciones=["piedra", "papel", "tijera"];//numero de opcines: 0-2
    const numero = Math.floor(Math.random() * 3); //devulve palabra situada en esa posición: 0 (piedra), 1 (papel), 2 (tijers)

    return opciones[numero];

    // return "string"; // piedra, papel, tijera
}

//Variable global de intervalo
let intervaloAI;

function AIvsAI(){

    //intervalo para ejecutar algo muchas veces (1 segundoa igual a 1000milisegundos)
    // setInterval("una función","cada cuando lo voy a hacer");
    intervaloAI = setInterval( ()=>{const JugadorAI2=elegirAutomaticamente();

        jugar(JugadorAI2);}, 1000);

    
    

}

function mostrarEstadisticas (){
    txtGanadas.innerText = objPuntaje.ganadas;
    txtPerdidas.innerText = objPuntaje.perdidas;
    txtEmpatadas.innerText = objPuntaje.empatadas;

    txtEstadisticas.innerHTML= `<div>
    <h1>Stats AI:
    🤜🏼x ${objPuntaje.stats.ai_piedra} 🫱🏼x ${objPuntaje.stats.ai_papel} ✌🏼x ${objPuntaje.stats.ai_tijera}</h1>
    <h1>Stats usuario: 
    🤜🏼x ${objPuntaje.user_piedra} 🫱🏼x ${objPuntaje.stats.user_papel} ✌🏼x ${objPuntaje.stats.user_tijera}</h1>
    </div>`;

    // graficas barra

    graficarBarra();


}

function graficarBarra(){
    const total = objPuntaje.ganadas + objPuntaje.perdidas;
    let porcentajeGanadas = Math.round((objPuntaje.ganadas/total)*100);
    let porcentajePerdidas = Math.round((objPuntaje.perdidas/total)*100);

    divGanadas.innerHTML=`Ganadas <br> ${porcentajeGanadas} %`;
    divPerdidas.innerHTML=`Perdidas <br> ${porcentajePerdidas} %`;
    divGanadas.style.width=porcentajeGanadas+"%";
    divPerdidas.style.width=porcentajePerdidas+"%";

}
function resetStats(){
 
//borro intervalo de AI en caso de haberlo uniciao
    clearInterval (intervaloAI);

    objPuntaje.ganadas = 0;
    objPuntaje.perdidas = 0;
    objPuntaje.empatadas = 0;
    objPuntaje.stats.ai_piedra = 0;
    objPuntaje.stats.ai_papel = 0;
    objPuntaje.stats.ai_tijera = 0;
    objPuntaje.stats.user_piedra = 0;
    objPuntaje.stats.user_papel = 0;
    objPuntaje.stats.user_tijera = 0;


    // re-imprimir la pantalla
    mostrarEstadisticas ();

}



//3. EJECUTAMOS NUESTRO CÓDIGO

resetStats();