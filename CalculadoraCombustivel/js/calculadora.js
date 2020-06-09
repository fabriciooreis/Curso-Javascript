//estudar o load
//Botão para limpar os campos
var btnLimpar = window.document.getElementById("btnLimpar");
//Botão para calcular 
var btnCalcular = window.document.getElementById("btnCalcular");
//imagem para trocar no calculo
var imagem = window.document.getElementById("imgPrincipal");
function limpar(){
    var campoEtanol = window.document.getElementById("valorEtanol");
    var campoGasolina = window.document.getElementById("valorGasolina");
    campoEtanol.value = "";
    campoGasolina.value = "";
    imagem.src="img/neutro.png";
}
function calcular(){
    var campoEtanol = window.document.getElementById("valorEtanol");
    var campoGasolina = window.document.getElementById("valorGasolina");
    if(campoEtanol.value==""){
        alert("Preencha o campo Etanol");
        campoEtanol.focus();
        return;
    }else if(campoGasolina.value==""){
        alert("Preencha o campo Gasolina");
        campoGasolina.focus();
        return;
    }else{
        var resultado = (campoEtanol.value / campoGasolina.value);
        resultado = resultado *100;
        if(resultado >= 71){
            imagem.src="img/gasolina.png";
        }else if(resultado <=70){
            imagem.src="img/etanol.png";
        }else{
            imagem.src="img/neutro.png";
        }
    }
}

btnLimpar.addEventListener("click", limpar);
btnCalcular.addEventListener("click", calcular);

