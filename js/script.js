let intervaloCoracao = null;

let pTimer = document.querySelector("#timer");

let dataInicio = new Date("2026-01-18T17:17:00");
let tempoInicio = dataInicio.getTime();

//chama a funcao para mostrar o timer atualizado;
atualizaTimer();

//chama a funcao para atualizar o timer a cada segundo
setInterval(() => {
    atualizaTimer();
}, 1000);



//funcao para mudar o layout de acordo com a largura da tela
function redimensionaLayout() {
    if (window.innerWidth <= 767) {
        coracaoPulsando(["200px", "210px"], ["150px", "160px"]);
    }
    else {
        coracaoPulsando(["300px", "310px"], ["250px", "260px"]);
    }
}

redimensionaLayout();
window.addEventListener("resize", redimensionaLayout); //adiciona o evento de mudar o comportamento do layout quando mudar o tamanho da tela


//funcao para atualizar o contador
function atualizaTimer() {
    let dataAtual = new Date();
    let tempoAtual = dataAtual.getTime();
    let diferenca = tempoAtual - tempoInicio;
    converteTempo(diferenca);
}

//funcao para converter os milissegundos em dias, horas, minutos e segundos
function converteTempo(milissegundos) {
    let dias = Math.floor(milissegundos / 86400000);
    let resto = milissegundos % 86400000;

    let horas = Math.floor(resto / 3600000);
    resto = resto % 3600000;

    let minutos = Math.floor(resto / 60000);
    resto = resto % 60000;

    let segundos = Math.floor(resto / 1000);

    pTimer.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}


//funcao para criar o efeito de coracao pulsando
function coracaoPulsando(width, height) {
    let coracao = document.querySelector(".img");

    if(!coracao) {
        console.log("O elemento coração não existe!");
        return;
    }
    let i = 1;

    coracao.style.transition = 'all 2s ease';

    clearInterval(intervaloCoracao);

    coracao.style.width = width[i];
    coracao.style.height = height[i];

    intervaloCoracao = setInterval(() => {
        coracao.style.width = width[i];
        coracao.style.height = height[i];
        i = (i + 1) % width.length; //faz o i se tornar 0 se o seu valor ser maior que o tamanho do array
    }, 1000);
}
