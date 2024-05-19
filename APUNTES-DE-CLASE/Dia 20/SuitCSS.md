# SuiteCSS

Links Oficiales:
- Link a [Documentación](https://suitcss.github.io/)oficial SuiteCSS
- Link a [GitHub](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)
Se usa sobre todo con preprocesadores, se usa con frameworks o librerías como: REACT, Angular, etc... E una nomenclatura basada en BEM pero con algunas diferencias. Sus partes son: `Componentes`, `Elementos`, `Modificadores`, `Utilidades/Utilities` y `Estados`

### Partes de SuiteCSS
- ComponentName (PascalCase)
- ComponentName-elementName (PascalCase-camelCase)
- ComponentName--modifierName (PascalCase--camelCase)
- ComponentName.isstateOfComponent (.isPascalCase, .hasPascallCase, .focusPascalCase, .onPascalCase)
- u-utilityName(u-camelCase)
- Variables
  
### Components (bloques) y elementos
Se basa en tener bloques y elementos como en BEM, pero estos se escriben en PascalCase.

```css
/*Componente*/
.Galeria{}
/*Elementos (Descendants)*/
.Galeria-titulo{}
.Galeria-imagen{}
.Galeria-pieGaleria{}
```
### Modificadores 
Al igual que en BEM se utilizan modificadores

```css
/*Componente*/
.Galeria--principal{}

```

### Estados

Los estados son modificadores `TEMPORALES` de un element (activo, inactivo, cerrado, abierto), y son independientes de los componentes en los que se usa.

```css
.MyComponent.isActive{
} 
/* .MyComponent.isActive{
} 
Este que va sin guión es el que USA los apuntes de la ESCUELA También es el favorito del PROFESOR*/

.MyComponent.onHover{
}

.MyComponent.isLoading{
}

.MyComponent.is-Active{
}
 /* Forma no apropiada, sin guión + PascalCase, como arriba, es la forma correcta para este curso, aunque esta también lo sería */

```

```html
<div class="MyComponent isActive"></div>
<div class="MyComponent"></div>
<div class="MyComponent"></div>
<div class="MyGallery isActive"></div>
<div class="MyGallery"></div>
<div class="MyGallery"></div>


```

### Utiliades/Utilities
Es una de las principales diferencias con BEM, ya que se agrega el concepto de utilidad. Es una clase que son `INDIVIDUALES` que se puede aplicar a `CUALQUIER ETIQUETA` y que no tiene relación alguna con un componente o elemento que se esté usando. Se escriben con un `u-` al frente.

```css
.u-textCenter{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
} 
.u-bgRed {
    background; red;
}
.u-textRight {}
```
Normalmente solo contienen una sola regla son cosas muy concretas, porque solo hacen una sola cosa.

### Variables

Como escribir SuiteCSS en Variables:

```css
:root{
    
    /* Ejemplos de variables CSS tradicionales
    --MiColorPrincipal: red;
    --MiColorSecundaria: azul;*/  
En SUITECSS
--Componente-miColorPrincipal: red;
--Componente-elemento-miColorPrincipal: red;
--Componente-modificador-miColorPrincipal: red;
--Componente-onHover-miColorPrincipal: red;
--Componente-elemento-onHover-miColorPrincipal:red;
}

h1{
    color: var(--MiColorPrincipal);
}
.text{
    color: var(--MiColorPrincipal);
}
--MiColorPrincipal:#fff;
--MiColorSecundaria:#000;


```

