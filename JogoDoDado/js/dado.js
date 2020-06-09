var botao = window.document.getElementById("btn");
var imagem = window.document.getElementById("imagem");
botao.addEventListener("click", sortear);
function sortear(){
    var sorteio = Math.floor(Math.random()* 6 + 1);
    switch(sorteio){
        case 1:
            imagem.src = "img/face1.png";
            break;
        case 2:
            imagem.src = "img/face2.png";
            break;
        case 3:
            imagem.src = "img/face3.png";
            break;
        case 4:
            imagem.src = "img/face4.png";
            break;
        case 5:
            imagem.src = "img/face5.png";
            break;
        case 6:
            imagem.src = "img/face6.png";
            break;
        default:
            //caso contraio
            break;
    }
}
//console.log(Math.PI); retorna o valor de Pi = 3.14
//console.log(Math.sqrt(64)); retorna a raiz quadrada de 64 = 8
//console.log(Math.floor(1.84)); retorna o valor arredondado para baixo = 1
//console.log(Math.random()); gera um numero de forma aleatória entre 0 e 1