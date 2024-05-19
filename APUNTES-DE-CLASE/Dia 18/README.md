# Transiciones en CSS!
<!--Para H1 solo una almohadilla-->
## Que son
<!--Para H2 2 almohadillas-->
Son una forma de cambiar los valores de las propiedades de un elemento de una manera suave y gradual. Se pueden aplicar transiciones a cualquier propiedad que acepte valores numéricos o de color. Por ejemplo pueden animar el cambio de tamaño de un elemento, su color, su color de fondo, o de su opacidad.


[Imagen de transición CSS](https://miro.medium.com/v2/resize:fit:900/1*VuMygHWOfgpnouwUWjNhQA.png)

<!--Para poner una imagen ponemos un link y lo hacemos con dos corchetes donde ponemos el titulo del link y al lado ponemos paréntesis donde ponemos la URL. Si ponemos ! se nos carga la imagen-->

## Donde los podemos utilizar

Podemos consultar el manual oficial:
[Manual oficial de transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

Sin embargo una forma rápida de identificar propiedades transicionables es buscar propiedades que acepten valores numéricos o de color

Propiedades númericas:
- width
- height
- font-size
- padding
- margin 
- border-width 
- opacity
- transform (prop. como scale, rotate, translate, etc.)

Propiedades de color:
- color
- background-color
- border-color
- box-shadow
- text-shadow
  
## Como se define una transicion 
Las transiciones se definen mediante la propiedad `transition` y se pueden presonalizar con la siquiente subpropiedades:

- `transition-property`: Especifica la propiedad que se animará 
- `transition-duration`: Especifica la duración de la animación
- `transition-timing-function`: Especifica la función de la temporización de la animación 
- `transition-delay`: Especifica el retraso de comenzar la animación

<!--Esto sirve para hacer un cuadrado donde poner código poniendolo entre 2 conjuntos de 3 backticks y se le pone el tipo de codigo a la derecha -->


``` css
div {
   /*Segmentar la transicion en distintas cajas (NO RECOMENDADA)*/ 
   transition-property: font-size;
   transition-duration: 4s;
   transition-timing-function: ease-in-out;
   transition-delay: 2s;
   /* Unificamos cada transición en una sola regla
   transition: <property> <duration> <timing-function> <delay>
   */
   transition: font-size 4s ease-in-out 2s;
   transition: color 1s
}
```
## Transitions properties
- all: todas las propiedades
- none: ninguna propiedad 
- property: una o más separadas con coma

``` css
h1{
   transition: all 2s;
   transition: none;
   transition: width 2s, height 3s, background-color 2s;
}
```
## Transition Duration y Delay 

> `Duration`: Tiempo que dura la transición en completarse


> `Delay`: Tiempo que se demora la animación antes de comenzar

# Timing Functions

- `ease`: velocidad lenta - rápida - lenta (por defecto)
- `linear`: velocidad constante
- `ease-in`: velocidad lenta - luego rápida
- `ease-out`: velocidad rápida - luego lenta 
- `ease-in-out`:velocidad lenta - rápida - lenta (mix entre easy-in y easy-out)
- `cubic-bezier()`Función de timing personalizada

``` css
.box{
    width: 100px;
    height: 100px;
    background-color: red; 
    transition: width 2s, height 2s, backgorund-color 2s; 
    
}
.box:hover {
    width: 200px;
    height: 200px;
    background-color; blue;
}
```



