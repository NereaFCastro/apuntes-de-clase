# FECHA DATE ()

El objeto Date() devuelve una fecha específica. 

```js
let hoy = new Date(); //devuelve la fecha actual

//sumar 1 día
const sumarUnDia = new Date (hoy);

sumarUnDia.setDate(hoy.getDate() + 1); // suma un día

const restar2Horas = new Date (hoy);
restar2Horas.setHours (hoy.getHours() -2); // resta dos horas

function cambiarMinutos (fecha, minutos){
    const nuevaFecha = new Date (fecha);
    nuevaFecha.setMinutes (fecha.getMinutes() + minutos);
    return nuevaFecha;
}

const hoy = new Date ();
const dentrode5minutos= cambiarMinutos (fecha, 5);
const hace15minutos = cambiarMinutos (fecha, -15);
```

# Math.random () entre dos valores

Math.random() devulve un número decimal entre 0 y 1

```js
function numeroRandomEntre (min, mac){
    return Math.floor(Math.random() * (max-min +1)+min);
}

const min=2;
const max=15;
const numeroAleatorio = numeroRandomEntre (min, max);
console.log(`Numero entre ${min} y ${max} es ${numeroAleatorio}`);
```

# BOM y Objeto Window

El Bom representa el navegador (Chrome, Safari...). Window es el objeto principal del BOM y contiene métodos que nos permite interactuar con él. 

```js
//obtener la altura y el ancho de la ventana
const altura = window.innerHeight;
const anchura = window.innerWidth;

// obtener la URL actual
const url = window.location.href;

// Redirigir a otra página
window.location.href = "https://google.com";

// Recargar la página
window.location.reload();

// Historial de navegación
window.history.back();
window.history.forward();

//Abrir una ventana nueva
const nuevaVentana = window.open("https://google.com", "_blank", "width=600, height=400");
nuevaVentana.close(); //cerrar la ventana que abrimos

// Ejecutar una función cada vez que redimensiono mi pantalla
window.addEventListener ("resize", () =>{
    const anchura = window.innerWidth;
    console.log("Cambie el ancho de mi ventana", anchura);
    if (anchura > 650){
        console.log("estoy en desktop"):
    } else {
        console.log("estoy en el móvil");
    }
})




//ejemplo con createEelement
const div = document.createEelement ('div'); // con esto puedo crear cualquier etiqueta
const imagen = document.createEelement(`img`); //<img/>
imagen.src="imgs/foto1.png"; //<img src="imgs/foto1.png"/>
imagen.alt="Mi foto de perfil"; // <img src="imgs/foto1.png" alt="Mi foto de perfil"/>

imagen.addEventListener("click", ()=>{
    console.log("Le hice click");
})

// en el div agregar la imagen
div.appendChild(imagen); 

// en el body añadir el div
document.body.appendChild(div); //Nos lo agrega al principio del body. Con insertBefore nos lo agrega al pirncipio.


// ejemplo con template strings
document.body.innerHTML+=`<div>
                            <img src="imgs/foto1.png" alt="Mi foto de perfil"/>
                            </div>`
const miImagen = document.querySelector ("img");

miImagen.addEventListener("click", ()=>{
    console.log("Le hice click");
})
```

# JSON 

Es un `string`, aunque se vea con formato de objeto!!!!! Es una representación de datos en forma de texto (STRING) que sigue una sintaxis específica. Es un formato que facilita la comunicación entre back-end y front-end, servidores y es fácil de leer para el usuario, y fácil de crear para la máquina.
```js
//Objeto JAVASCRIPT (jsonplaceholder.typicode.com)
const alumno={
    edad: 25,
    nombre: "Pepito",
    saludar()=> {alert(HOLA);}
}

//convertir un objeto JS en string de JSON
const jsonString2= JSON.stringify(alumno);
console.log(jsonString2);
//{
//    "edad":25,
//   "nombre":"Pepito",
//}

//String JSON
const jsonString=`{"edad":25, "nombre":"Pepito"}`;
console.log(jsonString);
//convertir un string de JSON a un objeto JS
const objeto = JSON.pase(jsonString);
console.log(objeto); //todo e objeto
console.log(objeto.edad); //25


```

