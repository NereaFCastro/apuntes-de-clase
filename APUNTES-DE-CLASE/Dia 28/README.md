## Math

El objeto `math`nos proporciona propiedades y métodos para realizar operaciones. Los más comunes son:

- Math.random(): devuelve un número pseudoaleatorio entre 0 y 1. 
- Math.round (): devuelve el valor de un número redondeado al número entero más cercano. 
- Math.ceil(): redondea para arriba. 
- Math.floor(): redondear para abajo.
- Math.abs (): devuelva el valor abosluto de un número. 

```js
let numero = 3.1416;
let numeroRedondeadoEntero = Math.round (numero); // 3
let numeroRedondeadoParaArriba = Math.ceil (numero); // 4
let numeroDeDosDigitos = Math.round(numero*100)/100// 3.14 asi cónseguimos dos dígitos 
let = math.round(math.random)*10 //conseguir número aleatorio entre 1 y 10
```

## Interpolación de variables (Templete Strings)

Es una forma de encadenar strings y variables de forma legible. Se utiliza ` " ` " `"backtick" o acento abierto`para delimitar el string y `${}` para insertar la variable.

Entre los beneficios tenemos:
- Lectura mucho más sencilla.
- Uso de variables en nuestros strings.
- Posibilidad de escribir múltiples lineas de texto.
- Realizar operaciones matemáticas dentro de un string.

```js
let nombre = "Juan";
let edad= 30;
let contenido = `<div class="caja">
                <h1>Hola a todos! Mi nimbre es &{nimbre}<h1>
                </div>`
            
let mensaje = `Hola, me llamo ${nombre} y voy a cumplir ${edad+1} años!`;

```