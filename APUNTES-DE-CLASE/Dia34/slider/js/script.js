//-------------------------------------
// 1. DECLARAMOS VARIABLES Y CONSTANTES
//-------------------------------------

//Slider
const sliderImages = document.querySelector(".Slider-images");
const listImages = document.querySelectorAll(".Slider-images img");

//Botones
const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");

//Contador
const spanActual = document.getElementById("txtActual");
const spanTotal = document.getElementById("txtTotal");

let imgIndex = 0;
const totalImages = listImages.length;

// EventListeners

btnNext.addEventListener("click", nextImagen);

btnPrev.addEventListener("click", prevImagen);

//-------------------------------------
// 2.FUNCIONES
//-------------------------------------
function nextImagen(){
    imgIndex++;
    if (imgIndex >= totalImages){
        imgIndex=0;
    }
    actualizarslider();
    actualizarContador();

}

function prevImagen(){
    imgIndex--;
    if(imgIndex < 0){
        imgIndex = totalImages;
    }
    
    actualizarslider();
    actualizarContador();
}

function actualizarslider(){
    const width=sliderImages.querySelector('img').clientWidth; //calcula width automáticamente
    //const width=400; el ancho del slider que marcamos en styles
    sliderImages.style.transform = `translateX(${-width * imgIndex}px)`;
}

function actualizarContador(){
    spanActual.textContent = imgIndex + 1;
    
}
//-------------------------------------
// 3. EJECUTAMOS NUESTRO CÓDIGO
//-------------------------------------
actualizarContador();
spanTotal.textContent = totalImages;

//-------------------------------------
// 4. CREAR INTERVALOS
//-------------------------------------

let intervalos;
agregarIntervalo();

sliderImages.addEventListener("mouseover", () =>{
    clearInterval(intervalos);

})

sliderImages.addEventListener("mouseout", () =>{
    agregarIntervalo();
    
})

function agregarIntervalo(){
    intervalos = setInterval (nextImagen, 2000);
}