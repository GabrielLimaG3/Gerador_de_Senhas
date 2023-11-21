var senha = document.querySelector(".senha")
var btn_gerar_light = document.querySelector(".btn_gerar_light")


btn_gerar_light.addEventListener("click", gerar)

function gerar(){
    senha.innerHTML = Math.random().toString(36).slice(-10);
}


