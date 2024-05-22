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

let decimales= 22.30; // número decimal podemos utilizar la connstante parseInt para pasarlo a número natural, página 60 manual
let entero= 45; //número entero
let negativo= -5;
let PI = 3.24159;
let miNumero = Number("1234"); // esto es igual a 1234

let estaEncendido= false;
let isPrimary = true;
let onActive = false;

//REFERENCIALES: hace referencia a un lugar (alumnosDeDW). El valor de una constante SI se puede modificar cuando hablamos de arrays y objetos. En una primitiva NO se puede modificar.

//------------------------------------------

//arrays: con corchetes
const alumnosDeDW = ["Nerea", "David", "Jenny"];
const edades = [25, 32, 18, 49];
const listaMixta = [1, "Juan", true {val1:"hola", val2:"chau"}];

const listaDeCompras =["tomate", "lechuga"];
//agregar a la lista "patata"
listaDeCompras = ["tomate", "lechuga","patata"];

//las listas empiezan con el indice 0 y se leen así
console.log(listaDeCompras [0]); // tomate
console.log(listaDeCompras [1]); // lechuga
console.log(listaDeCompras [2]); // patata

console.log(listaDeCompras [3]); // undefined
console.log(listaDeCompras [-1]); // undefined

//------------------------------------------

// objetos: con llaves
const alumno = { 
    nombre: "Mario", 
    edad: 33,
    isRecibido: false, 
    presentarProyecto: function ()=> { 
        isRrecibido=true;
        edad=34;
    },
    };


//lectura de una variable
console.log(estaEncendida);
let miNuevaVar= estaPrendida;

//lectura de una propiedad
console.log("La edad de mario es:", alumno.edad ); //imprime "La edad de Mario es: 33"

//uso de un método
alumno.presentarProyecto();
console.log();
```


## Más tipos de datos

- Undefined: es un valor que se asigna a auna variable que no tiene valor (se declara pero no se le asignó un valor).
- Null: valor que se le asigna a una variable para indicar que no tiene valor intencionalmente. 
- NaN (not a number): valor que obtenemos cuando se esperaba un número pero no lo es.
- Empty (vacío): un string con valor vacío " 0 ".
- Funciones
- Fechas

```javascript
// otro tipos de datos
let noDefinido; // undefined

let varNula="texto"; // string
varNula=null; // null
    
let noEsNumero=NaN; // not a number

let vacio= ""; // empty

let saludar = function () {
    console.log("Hola a todos!");
} // esto es una función

let hoy = new Date (); // en realidad es un objeto
````

Podemos siempre ver que tipo de dato es una variable utilizando el operaor `typeof``

```js

console.log(typeof NoDefinido); //undefined
console.log(typeof varNula); //objetc
console.log(typeof noEsNumero); //number
console.log(typeof vacio); //string
console.log(typeof saludar); //function
console.log(typeof hoy); //object

```

## Consola (Chrome Developers Tool)

La consola nos permite imprimir mensajes y depurar nuestro código. Podemos imrimir mensajes de diferentes tipos. También nos permite filtrar los mensajes según tipo.

```javascript
//mensajes informativo
console.log("Este es un mensaje informativo");
//mensajes de error
console.error("Esto es un mensaje de error");
//mensajes de advertencia
console.warn("Este es un mensaje de ADVERTENCIA");
//mensajes de información
console.info("Este es un mensaje informativo");
//mensajes de depiración (no verbose)
console.debug("este es un mensaje informativo de depuración");
//tabla de datos
console.table(["Manzana", "Banana", "Cerezas"]);
```

## Operadores

Son símbolos que nos permiten hacer operaciones en JS. Hay distintos tipos, por ejemplo, aritméticos, de asignación, de comparación, de lógica, etc.

### Operaciones aritméticas

Operaciones matemáticas:
- Suma (+): suma de valores
- Resta (-): resta de valores
- Multiplicación (*): multiplica valores
- Divisón (/): divide valores
- Módulo (%): devuelve el resto de la división de dos valores
- Incremento (++): incrementa en 1 el valor de la variable
- Decremento (--): decrementa en 1 el valor de la variable

```javascript
let a = 10;
let b = 5;

let suma = a + b; //15
let resta= a - b; //5
let multiplicacion= a * b; //50
let division = a / b; //2
let modulo = a % b; //0
let incremento =a++; //11
let decremento=b--; //4

modulo = resta = suma = incremento = b - 5; //0 ya que se lee de derecha a izquierda
```

Un ejemplo de módulo muy común es para saber si un número es par o impar, es decir, si el resto de la división de un número por 2 es igual 0. 

```js
let numero=10;
let esPar = (numero % 2 === 0) // es true. Con yres === estamos preguntando si el elemento de la derecha y el de la izquierda es igual
let esImpar = (numero % 2 !== 0)// es false. Con !== preguntamos si el elemento de la derecha y el de la izquierda es diferente
```

## Operadores Comparativos

Se utilizan para comparar dos valores en JS. Como se ve arriba,  la respuesta siempre es true o false.

- Igual `==`: compara si dos valores son iguales
- Estrictamente igual `===`: compara si dos valores son iguales y del mismo tipo.
- Dstinto `!=`: compara si dos valores son distintos
- Distinto estricto `!==`: compara si dos valores son distintos
- Mayor que `>`: compara si un valor es mayor a otro
- Menor que `<`: compara si un valor es menor a otro
- Mayor o igual que `>=`: compara si un valor es mayor o igual a otro
- Menor o igual que `<=`: compara si un valor es mayor o igual a otro

```js
let a = 10;
let b = "10";

a == b; //true, 10 de número y "10" de texto son lo mismo
a === b; //false, pero no son del mismo tipo, 10 es número y "10" es string

let num1 = 10;
let num2 = 5;

let esIgual =             (num 1 == num2); //false
let estrictamenteIgual =  (num1 === num2); //false
let esDistinto =            (num1 != num2); //true
let estrictamenteDistinto = (num1 !== num2) //true
let esMayor =                (num1 > num2); //true
let esMenor =              (num1 < num2); // false
```
## Operadores lógico

Podemos verificar que múltiples operaciones sean verdaderas usando estos operadores:

`&&` - se tienen que cumplir todas las comparaciones
`||` - se tiene que cumplir al menos una de las comparaciones.
`!`- Hace lo contrario de lo que es

```js
if (edad > 21 && acepteTyC == true){
    //registrar al usuario
}

if (diaSemana == "sabado" || diaSemana == "domingo"){
    return "Es fin de semana";
}

if(num % 2 === 0){
    //es par
}

if(num % 2 !==){ 
    //es impar
}


```

## Funciones <!-- a partir clase  27 -->

Es un bloque de código o algoritmo que realiza una operación específica. Puede recibir valores de entrada (`parámetros`) y devolver un único resultado. Los valores que se pasan a la función cuando se invoca, se les llama `argumentos`.

```js

/**
 * Función que saluda al usuario y le indica su nombre y edad. 
 * @param {string} nombre - Nombre del usuario
 * @param {number} edad - La edad del usuario
 * 
 * @return {void} - no devuelve nada
 * 
 * */
function Saludar (nombre,edad) { 
    let respuesta =  "Hola a todos!, mi nombre es" + nombre + "Mi edad es" + edad; //1. creo una variable

    return respuesta; //2. devuelvo la variable

}

let mensaje = Saludar("Juan", 18);
console.log(mensaje);
alert(mensaje);
let mensaje = Saludar("Tomas", "20");
let mensaje = Saludar("Maria", 29);
```

## Condicionales

Son estructuras de color que nos permite tomar decisiones. Si se cumple la condición, se ejectura un bloque de código, y si no se cumple, se ejecuta otro bloque de código.

- El uso de "else" es opcional. 
- Se puede añadir condicionales. 

```js
let numero = 7;

/**
 * Me indica si el módulo (resto de una división) de 2 de un número es igual es PAR o IMPAR.
 */

if (numero % 2 === 0){
    console.log("El número es PAR");

} 

else {
    console.log("El número es IMPAR");
}

let edad = 16;
//me indica si es mayor de edad
if (edad >= 21){
    console.log ("Es mayor de edad");
} else {
    console.log("Es mejor de edad");
    }
```

## Uso de Bucles

Los bucles permiten repetir un código varias veves. En JS tenemos tres tipos de bucles:

-`for`: se utiliza cuando sabemos cuantas veces queremos que se repita.
-`while`:
-`do-while`:

```js
//for (inicializador; condicion; incremento)
for (let i¡contador=0; < 10; contador++){
    //me voy a repetir muchas veces!
    console.log("Hola alumnos!" + contador);
}


```

<!-- ### Ejercicio

1. Crear una `function`que reciba un número y devuelva si es par o impar.
2. Crear una functionque reciba un número y devuelva si es positivo, negativo o cero
3. Crear una functon que me indique si es mayor o menor de edad.
4. Crear una fuction a la que si le indico el día de la semana, me devuelve si es laboral o no.
5. Crear una fuction donde sus parámetros sean jugador1 y jugador2 y devuelva si el jugador2 le gana a jugador2 en un juego de pieda papel o tijera.
6. Modificar la calculadora del día 25 para que podamos sumar, restar, multiplicar o dividir dos valores utilizando funciones.  -->