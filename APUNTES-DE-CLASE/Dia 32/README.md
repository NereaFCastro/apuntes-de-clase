# Query Selector

Los Query Selector nos devuvlven objetos del tipo "element" que son referencias a los nodos HTML, o a `null` si no lo encuentra.

```js
// seleccionamos el primer input que posea el atibuto type = "text"
const primerTextInput = document.querySelector(`input[type="text"]`);
console.log(primerTextInput);

```

# QuerySelectorAll

Este nos devulve una lista de nodos (nodeList) que se comporta como un array, incluso es una `lista vacía` si no encuentra ningún elemento.

```js
// seleccionamos todas las secciones con la clase "section"
const todosLosDivSections = document.querySelectorAll(`.section`);
todosLosDivSection.forEach( elemento => {
    console.log(elemento);
});

```
# addEventListener

Escuchamos un evento específico ("click", "keyup", "input", "change", etc.) en alguno de nuestros elementos. 

- Input: se ejecuta cada vez que el valor del campo cambia. Esto incluye escribir, borrar o pegar texto con el ratón.

- Keyup: cada vez que el usuario suelta la telca. Es útil por si necesitas detectar cambios a tiempo real mientras el usuario escribe, pero NO se va a ejecutar si el usuario pega o borra un texto con el ratón. 

- Change: este evento se ejecuta cuando el elemento piede el foco y su valor ha cambiado. Es útil si solo necesitamos relacionar cuando el usuario termina de editar el campo.

```js
// ejecutar una función cuando el valor input cambia
primerTextInput.addEventListener("input", () => {
    console.log("El input cambio su valor");

});

// ejecutar una función cuando libero la tecla de teclado/pantalla
primerTextInput.addEventListener("keyup", () => {
    console.log("Acabo de liberar una tecla");

});

// ejecutar una función cuando me voy del input y su valor ha cambiado
primerTextInput.addEventListener("change", () => {
    console.log("Me fui del input y su valor ha cambiado");

});



```

