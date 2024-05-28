## Definición de funciones

```js
// Función clásica
function miFunction(param1, param2) {
    return valor;
}

// Función asignada a variables
const miFuncion = function (param2, param2){
    return valor;
}

// Función flecha (arrow function)
const MiFuncion = (param1, param2) =>{
    return valor;
}

// Función flecha simplificada
const miFuncion = param => valor;

// Proceso 1: divEstadisticas.addEventlistener("lo que quiero escuchar", "la función que voy a ejecutar cuando lo escuche");

// Proceso 2:divEstadisticas.addEventlistener("click", function HacerAlgo(){
//     console.log("estoy haciendo algo cuando me hicieron click");
// });

// Resultado final con arrow function para que nos ocupe menos espacio (cuando hacemos "click" en divEstadistica, mostramos el mensaje en consola).

 divEstadisticas.addEventlistener("click", () => {
    //función de callback: es una función que se ejecuta dentro de otra
     console.log("estoy haciendo algo cuando me hicieron click");
 });

```