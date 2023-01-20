/* Paleta de Colores */
const paletas = {
    "firstPalette": ["264653", "2a9d8f", "e9c46a", "f4a261", "e76f51"],
    "scdPalette": ["ccd5ae", "e9edc9", "fefae0", "ddb892", "d4a373"],
    "thrPalette": ["e63946", "f1faee", "a8dadc", "457b9d", "1d3557"],
    "fdthPalette": ["cdb4db", "ffc8dd", "bde0fe", "90a8c3", "1d3557"]

}

// Botones Demo para cambiar la paletta
const paletBtn = document.querySelectorAll(".demo-palette");

//Boton Reset
const resetBtn = document.querySelector('.reset-btn');

// Extraigo secciones del Demo Site
const dHeader = document.querySelector('.header');

const dSidebar = document.querySelector('.sidebar');
const dSideLinks = document.querySelectorAll('a');

const dConten = document.querySelector('.content');

const dFooter = document.querySelector('.footer');

//Boton de Copiado
const copyMsg = document.querySelector('.pallet-container__copy');

//Botones de los Colores
const colorsCards = document.querySelectorAll('.cards');

colorsCards.forEach((e) => {
    e.addEventListener('click', event => {
        let getColor = e.firstChild.innerText;
        navigator.clipboard.writeText(getColor);
        copyMsg.classList.toggle("copy-animation");
        setTimeout(function () {
            copyMsg.classList.remove("copy-animation");
        }, 1000);

    })


})



// A acada boton, funcion para cambiar color

//Botones DEMO de Paletas
paletBtn.forEach(e => {
    e.addEventListener('click', event => {
        let idData = e.id;
        changeColor(idData);


    })

})

//Boton Reset
resetBtn.addEventListener('click', e => {
    e.preventDefault();
    let idData = e.target.id;
    changeColor(idData);

})


// Funcion para cambiar el color
function changeColor(idD) {

    if (idD == "resetBtn") {
        dHeader.style.color = '#fff';
        dHeader.style.background = '#222222';

        dSidebar.style.background = '#525252';
        dSideLinks.forEach(element => {
            element.style.color = '#fff';

        });

        dConten.style.color = '#444';
        dConten.style.background = '#F3F3F3';

        dFooter.style.background = '#a2a2a2';
    } else {

        dHeader.style.color = '#' + paletas[idD][4];
        dHeader.style.background = '#' + paletas[idD][0];

        dSidebar.style.background = '#' + paletas[idD][1];
        dSideLinks.forEach(element => {
            element.style.color = '#' + paletas[idD][3];

        });

        dConten.style.color = '#' + paletas[idD][0]
        dConten.style.background = '#' + paletas[idD][2]

        dFooter.style.background = '#' + paletas[idD][0]
    }
}

