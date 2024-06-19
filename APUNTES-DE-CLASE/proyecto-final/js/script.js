/* ---------------------------------------------------------- */
/*                   1. GENERAL VARIBLES                      
/* ---------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {

    const bodyId = document.body.id;
    console.log("body id es:", bodyId);


    switch (bodyId) {
        case "home":
            console.log("estoy en home");
            iniHome();
            break;
        case "galeria":
            console.log("estoy en galeria");
            iniGaleria();
            break;
        case "contacto":
            console.log("estoy en contacto")
            iniContacto();
            break;
    }
});


// Código JS de Home

function inHome() {
    console.log("ESTOY EN HOME");
}

// Código JS de galeria

async function iniGaleria() {
    console.log("ESTOY EN GALERIA");
    //1: Variables y datos
    //traer datos de mis usuarios
    const galeriaContainer = document.querySelector(".galeria-container");
    let listaGaleria = [];

    //2. Funciones   
    async function traerUsuarios() {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users");
            //convertir mi string json a un objeto js
            const listaUsuarios = await response.json();
            //return lista usuarios
            return listaUsuarios;

        } catch (error) {
            console.error("Tuvimos un error al obtener datos: ", error);
            return [];
        }

    }
    
    function imprimirUsuarios() {
        console.log ("Mis usuarios son :", listaGaleria);
        galeriaContainer.innerHTML = listaGaleria.map( usuarios => {
            return ` <div class="userCard">
            <h3>${usuarios.name}</h3>
            <a href="mail:${usuarios.mail}" target="_blank">${usuarios.mail}</a>
        </div>
    `;
        })
        .join("");
    


    }

    //3. Ejecución
    //imprimirlos en pantalla
    listaGaleria = await traerUsuarios();
    imprimirUsuarios();


}



// Código JS de contacto
function iniContacto() {
    console.log("ESTOY EN CONTACTO");


}












/* ---------------------------------------------------------- */
/*                   2. NUESTRAS FUNCIONES
/* ---------------------------------------------------------- */



/* ---------------------------------------------------------- */
/*                  3. EJECUTAR NUESTRO CÓDIGO                        
/* ---------------------------------------------------------- */


