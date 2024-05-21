# Javascript

Es un lenguaje de programación de alto nivel, interpretado y orientado a objetos, que se utiliza para crear contenido dinánamico e interactivo en sitios web.

Lenguaje de alto nivel:
- Esta diseñado para ser fácil de leer y escribir para los humanos. 

Interpretado:
- Se ejecuta línea por línea, en tiempo real. No necesita ser compilado.

```js
let numero=1;
console.log("Instrucción1 y numero vale:", numero);

// Imprime: "Instrucción1 y numero vale: 1"
numero = numero + 1
console.log("Instrucción2 y numero vle: ", numero);
// Imprime: "Instrucción2 y numero vale: 2"
```

Orientado a objetos:
JS utiliza un paradigma (OOP), lo que significa que organiza el código en "objetos". Un objeto es una colección de propiedades (características) y métodos (funcionalidad) que se pueden leer y manipular.

Perro (objeto):
<!-- propiedades-->  
- color: blanco y negro 
- nombre: lasy
<!-- Métodos -->
- ladran (): hacer un ruido fuerte
- MoverLaCola (): mueve la cola demostrando su felicidad

```js

// Ejemplo de un objeto con propiedades y métodos

let alumnos = {
    nombre: "Lucía",
    edad: 35,
    saludar: function () {
        console.log("Hola, mi nombre es Lucía")
    }

}
```

## Donde probar/codificar JS
- En el navegador: inspecionar -> En la pestaña CONSOLE: escribiendo directamente.
- En un documento html con la etiqueta < script > , se suelen poner al final del body (pero dentro), luego inspeccionar y otra vez CONSOLE.
- Se puede utilizar un archivo .js externo y linkeado a nuestro html. Se pone al final dentro de la etiqueta < script > y dentro añadimos un src= donde se pione la ruta de la hoja de JS.
- En sitios web externos como https://playcode.io/, codepen o jdsfiddle


## Funcionalidades
1. Manipulación del DOM (Document Objetc Model): agregar, modificar o eliminar elementos HTML y CSS.
2. Procesas formularios: verificar datos ingresados por el usuario y realizar formularios complejos de múltiples secciones.
3. Manejo de animaciones: manipular efectos visiales y animaciones con nuestra web.
4. Manejo de eventos: responder a las acciones del usuario, como por ej: hacer click o desplazarse por la web.
5. Comunicación asíncrona con servidores mediante AJAX/Fetch: eviar y recibir datos de un servidor sin tener que recargar la página.

## Variables

> Son como cajas que utilizamos para guardar información. Esta información puede ser un número, texto, una lista de cosas, y muchos otros tipos más. Nos permiten almacenar datos y luego usarlos o modificarlos en diferentes partes de nuestro programa.
> Definir una variable: es como darle un nombre a esta caja con un rotulador para poder encontrarla más adelante. 
> Un vez que definimos una variable vamos asigarle un valor, es decir, poner cosas dentro de la caja (número, texto, lista...)
> Después podremos usar la variable: abrir la caja y ver que hay dentro. También podemos modificarlas, de ahí que sean variables.

En JS las variables se declaran con la palabra `let` o `const`. Antes se definiían con la palabra `var`seguido del nombre de la variable y opcionalmente un valor inicial.

```js
let nombre="Juan";
let edad=45;
const PI=3.14159;
```

## Comentarios en JS
- Comentario seimple se utiliza `//` para comentar una sola línea de código. 
- Comentario simple en la misma linea: se puede agregar la `//` al final de una linea.
- Comentario de bloque: se utiliza `/* ... */` para hacer comentarios de mæultiples líneas.
- Comentario de documentacióin se utiliza `/** ... */` para iniciar un bloque de documentación. Este tipo de comentario se utiliza para funciones y clases.

```javascript
// este es un comentario de una sola linea
let nombre="juan";
console.log("imprimir nombre"); //comentario simple en la misma linea.
/* Soy un comentario


multilinea*/

/** 
 * Esta es una funciín que suma 2 números:
 * @param {number} a - El primer número
 * @param {number} b - El segundo número
 * @return {number} - la suma de los 2 números
 * 
 * */

function sumar (a,b){
    return a+b
}

```
## Tipos de datos

- Números: enteros, decimales, positivos, negativos, etc.
- Cadenas de texto (strings): textos, palabras, frases, una letra, etc. Se escribe entre comillas simples , dobles "", o backticks ``.
- Booleanos: verdadero o falso.
- Lista de cosas (arrays): se escribe con corchetes [ ] y separados por ,
- Objetos (object): colección de propiedades (características) y métodos (funcionalidades). Se escriben con { }


```js
//PRIMITIVOS
let texto = "Hola alumnos de CEI";
let textoConComillasSimples = Hola estoy muy 'bien' ;
let textoConComillas = "I'm Tomi";
let texto = `Quiero comillas simples y dobles;` // template String

let numeros = 123;
let numeros2= "123"; //"123"
numero2=number (numero2); //123

let decimales= 22.30;
let negativo= -5;
let PI = 3.24159;
let miNumero = Number("1234"); // esto es igual a 1234

let estaEncendido= false;
let isPrimary = true;
let onActive = false;

//REFERENCIALES: hace referencia a un lugar (alumnosDeDW). El valor de una constante SI se puede modificar cuando hablamos de arrays y objetos. En una primitiva NO se puede modificar.

//arrays: con corchetes
const alumnosDeDW = ["Nerea", "David", "Jenny"];
const edades = [25, 32, 18, 49];
const listaMixta = [1, "Juan", true];

// objetos: con llaves
const alumno = { 
    nombre: "Mario", 
    edad: 33, 
    recibirse: function ()=> { 
        isRrecibido=true;
        edad=34;
    },
    }
```

## Más tipos de datos

- Undefined: es un valor que se asigna a auna vzriable que no tiene valor (se declara pero no se le asignó un valor).
- Null: valor que se le asigna a una variable para indicar que no tiene valor intencionalmente. 
- NaN (not a number): valor que obtenemos cuando se esperaba un número pero no lo es.
- Empty (vacío): un string con valor vacío " 0 ".
- Funciones
- Fechas

```javascript
// otro tipos de datos
let noDefinido; // undefined

let valNula="texto"; // string
valNula=null; // null
    
let noEsNumero=NaN; // not a number

let vacio= ""; // empty

let saludar = function () {
    console.log("Hola a todos!");
} // esto es una función

let hoy = new Date (); // en realidad es un objeto
