const menu = document.querySelector("#menu");
const itens = document.querySelector("#menu-itens");

function clickMenu() {
    itens.classList.toggle("hidden");
}

function sizeScreen() {
    if (window.innerWidth < 768) {
        // Remove itens
        itens.classList.add("hidden");
        // Mostra botão
        menu.classList.remove("hidden");
    }

    if (window.innerWidth >= 768) {
        // Mostra itens
        itens.classList.remove("hidden");
        // Remove botão
        menu.classList.add("hidden");
    }   
}

menu.addEventListener("click", clickMenu); 
window.addEventListener("resize", sizeScreen); 
window.addEventListener("load", sizeScreen); 