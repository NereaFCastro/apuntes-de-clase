## Async / Await 

La desventaja de las promesas es que se vuelven difíciles de entender cuando se anidan. Por ese motivo, se han creado las funciones `async`y `await`.

```js
// con la palabrabra async indicamos que la función será asíncrona
async function traerDatos(){
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const datos = await response.json(); //convierte mis datos de JSON en JS

    console.log(datos);
    console.log(datos[0].name); // Traer el nombre del usuario
    return datos;

    } catch(error)
    {
        console.error("tuve un error: ",error);
    }
}

listaUsuarios = traerDatos();

```

Ejemplo de restaurante:

```js
let plato = "ensalada";
console.log("Paso 1: solicitar a un camarero el plato", plato);
console.log ("Paso 2: el camarero va a buscar el plato de comida");
buscarPlato();

async function buscarPlato(){
try {
    const responseJson = await fetch("https://restaurante.com/api/traerPlato");
    const datos = await responseJson.json();

    console.log("Paso 4: el camarero lleva el plato de:", datoJs.plato);
    connsole.log("Paso 5: el cliente se come su comida");

} catch (error){
    console.log("Mi error fue:", error);

}
}
console.log ("Paso 3: la persona se toma el vaso de agua");

```