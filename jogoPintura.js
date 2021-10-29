var tela1 = document.getElementById("canvasPintura");
var pincel1 = tela1.getContext('2d');
pincel1.fillStyle = 'lightgray';
pincel1.fillRect(0, 0, 600, 400);

var desenha = false;
var corAtual = 'blue';
var xVermelho = 0;
var xVerde  = 50;
var xAzul = 100;
var yQuadrados = 0;
var tamanhoQuadrados = 50;

function desenhaQuadrado(x, y, tamanho, cor) {

    pincel1.fillStyle = cor;
    pincel1.fillRect(x, y, tamanho, tamanho)
    pincel1.fill();
}

function desenhaCirculo1(x, y, raio, cor) {

    pincel1.fillStyle = cor;
    pincel1.beginPath();
    pincel1.arc(x, y, raio, 0, 2 * 3.14);
    pincel1.fill();

}

function desenhaPaletaDeCores() {

    desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, 'red');
    desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, 'green');
    desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, 'blue');

}

function lidaComMovimentoDoMouse(evento) {

    var x = evento.pageX - tela1.offsetLeft;
    var y = evento.pageY - tela1.offsetTop;

    if (x >= xVermelho && x <= xAzul + xVerde && y <= tamanhoQuadrados) {
        desabilitaDesenhar();
    }

    if(desenha) {

        desenhaCirculo1(x, y, 5, corAtual);
    }
}

function habilitaDesenhar() {

    desenha = true;
}

function desabilitaDesenhar() {

    desenha = false;
}

function identificaCor (evento) {
    
    var x = evento.pageX - tela1.offsetLeft;
    var y = evento.pageY - tela1.offsetTop;
    if (x >= xVermelho && x < xVerde && y <= tamanhoQuadrados) {
        corAtual = 'red';
    }
    if (x >= xVerde && x < xAzul && y <= tamanhoQuadrados) {
        corAtual = 'green';
    }
    if (x >= xAzul && x < xAzul + xVerde && y <= tamanhoQuadrados) {
        corAtual = 'blue';
    }
}

desenhaPaletaDeCores(); // mostra os quadrados de seleção de cores

tela1.onmousemove = lidaComMovimentoDoMouse;

tela1.onmousedown = habilitaDesenhar;

tela1.onmouseup = desabilitaDesenhar;

tela1.onclick = identificaCor;