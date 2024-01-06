var btn = document.getElementsByClassName('btn')[0]
var btn_gerar =document.querySelector('.btn_gerar_light')
let text_senha = document.querySelector('.senha')
let conteiner_senha = document.querySelector('.conteiner_senha')


btn.addEventListener('click', mudartema)

function mudartema(){
    document.body.classList.toggle('teme-dark')
    document.body.classList.toggle('teme-light')

    btn.classList.toggle('btn_white')
    btn_gerar.classList.toggle('btn_gerar_dark')

    if(text_senha != text_senha.classList.toggle('senha')){
        text_senha.classList.toggle('senha-light')
    }{
        conteiner_senha.classList.toggle('conteiner_senha_light')
    }

    if(btn.innerHTML == 'light'){
        btn.innerHTML = 'dark'
    }else{
        btn.innerHTML = 'light'
    }
}

