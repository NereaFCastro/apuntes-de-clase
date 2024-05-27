# Objeto

Una colección de propiedades y todas tienen sus respectivos nombres (claves) y valores. Sus valores pueden ser de tofo tipo: datos, variables, funciones, otros objetos, etc. En el caso de las funciones, a estas propiedades les llamamos métodos.  

```js
const miObjeto = {
    propiedad1: "valor1",
    propiedad2: 2,
    propiedad3: "false",
    propiedad4 : 
    function metodoSumar (num1, num2){
        return num1, num2;
        },
    metodo2 : function (){ },
}
```

Podemos acceder a las propiedades del objeto desde sus métodos usando la palabra clave `this`. El uso de `this`hace referencia a ÉL mismo para acceder a sus valores.

```js
const coche = {
    marca: "Tesla", 
    modelo: "ModelX",
    kmsRecorridos: 7777,
    color: "negro",
    //métodos
    encender: function (){
        // uso de "this" para acceder a los kms actuales
        const kms = this.kmsRecorridos; //7777
        console.log(`Arrancando el coche, con ${kms}kms`);


    },
    // otro método
    buscarme: function (positionGPS){
        console.log(`conducir automáticamente hasta la posición de GPS ${positionGPS}`)


    }
}

//LEER KMS RECORRIDOS

const kilometros = coche.kmsRecorridos; // 7777
// escribir nuevos kms
coche.kmsRecorridos = kilometros + 5; //kmsRecorridos = 7782
// pintar coche
coche.color = "Rojo";
//  a diferencia de las variables, para llamar a un método hay que poner paréntesis al final
coche.encender();
coche.buscarme("aquí dentro irían cordenadas o ubicación GPS")
```