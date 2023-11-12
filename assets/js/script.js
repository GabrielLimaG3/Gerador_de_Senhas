const btn = document.querySelector('.btn');

function mudartema(){
    document.body.classList.toggle('teme-dark');
    document.body.classList.toggle('teme-light');
}

btn.addEventListener('click', mudartema);