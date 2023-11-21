var btn = document.getElementsByClassName('btn')[0]
var btn_gerar =document.querySelector('.btn_gerar_light')


btn.addEventListener('click', mudartema)

function mudartema(){
    document.body.classList.toggle('teme-dark')
    document.body.classList.toggle('teme-light')

    btn.classList.toggle('btn_white')
    btn_gerar.classList.toggle('btn_gerar_dark')

    if(btn.innerHTML == 'light'){
        btn.innerHTML = 'dark'
    }else{
        btn.innerHTML = 'light'
    }
}