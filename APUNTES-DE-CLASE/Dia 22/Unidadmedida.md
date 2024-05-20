# Unidades de Medida en CSS: px, %, em, rem

## PX

- Pixel: Es un punto en la pantalla, se usa para elementos de tamaño fijo, y NO se adapta bien a sitios responsive.

## Porcentajes
- Se adapta al tamaño del elemento padre. Toleran mejor el responsive
- Es recomendable usar porcentajs para tamaños de contenedores y elementos que deban escalarse PROPORCIONALMENTE con el tamaño de la ventana o de su padre.

## EM
- Es relativa al tamaño de la fuente (tipografía) del elemento padre. 
- Por ejemplo, el tamaño de la fuente del elemento padre es de 16px, 1em equivale a 16px. Esta unidad es útil para crear TAMAÑOS DE TEXTO y MÁRGENES que escalen con el tamaño de la fuente. Mejorando la ACCESIBILIDAD y flexibilidad dl diseño. Es recomendable usar EM para elementos que deban escalar proporcionalmente con el texto.

## REM (Root EM)
- La unidad REM es relativa al tamaño de fuente del elemento raíz (normalmente el <html>)
- Por defcto vale 16px
- Sirve para tener consistencia en TODO el documento.
- Es recomendable usar REM para tamaños de la fuente principal: Márgenes y para garantizar coherencia en el sitio