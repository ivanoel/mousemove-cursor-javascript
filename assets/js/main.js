// função de tamanho imagem aleatória

function tamanhoAleatorio(min, max) {
    min = Math.ceil(40);
    max = Math.ceil(150);
    return Math.floor(Math.random() * (max -min)) + min;

}

let seta = document.querySelectorAll('.setas');
for(let i = 0; i < seta.length; i++) {
    seta[i].style.left = Math.floor(Math.random() * 99) + 'vw';
    seta[i].style.top = Math.floor(Math.random() * 99) + 'vh';
    seta[i].style.width = tamanhoAleatorio() + 'px';
}

// Função para rotação das setas
function rotacaoSeta() {
    seta.forEach(function(setas) {
        let x = (setas.getBoundingClientRect().left + (setas.clientWidth / 2));
        let y = (setas.getBoundingClientRect().top + (setas.clientHeight / 2));

        // posicionando as setas em sua direção.
        let rad = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (rad * (180 / Math.PI) * -1) + 180;
        setas.style.transform = "rotate(" + rot + "deg)";
    })
}
// faz chamada para o body.
document.querySelector("body").addEventListener('mousemove', rotacaoSeta);