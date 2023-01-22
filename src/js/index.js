
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video")
const modal = document.querySelector(".modal"); 
const linkdovideo = video.src;
const botaoFechar = (document.querySelector(".fechar-modal"));

function alterarmodal(){
    modal.classList. toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alterarmodal();
    video.setAttribute("src", linkdovideo);
});

botaoFechar.addEventListener("click", () => {
    alterarmodal();
video.setAttribute("src","")
});