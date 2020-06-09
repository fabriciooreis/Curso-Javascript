var botaoAcender = window.document.getElementById("on");
var botaoApagar = window.document.getElementById("off");
var botaoBlink = window.document.getElementById("blink");

function on(){
    var imagem = window.document.getElementById("imagem");
    imagem.src="img/on.jpg";
}
botaoAcender.addEventListener("click", on);

function off(){
    var imagem = window.document.getElementById("imagem");
    imagem.src="img/off.jpg";
}
botaoApagar.addEventListener("click", off);

//para fazer a lampada piscar vamos trabalhar com eventos de sincronização no javaScript
//que permitem executar instruções ou funções em determinados intevalos de tempo
//setTimeOut(função, tempo em milissegundos -> 1000 milissegundos = 1 segundo)

function blink(){
    var intervalo =0;
    var contador =0;
    while(contador < 10){
        intervalo +=300;
        setTimeout(on , intervalo);
        intervalo +=300;
        setTimeout(off, intervalo);
        contador++;
    }
}
botaoBlink.addEventListener("click", blink);