var botao = window.document.getElementById("btn");
var ul = window.document.getElementById("listaImpressao");
function caculaTabuada(num){
    //alert(num);
    for(var x = 0; x < 11; x++){
        var li = window.document.createElement("li");
        li.innerHTML = num+" * "+ x +" = "+ num*x + "<BR>";
        ul.appendChild(li);
    }
    var linha = window.document.createElement("li");
    linha.innerHTML ="<BR><BR>";
    ul.appendChild(linha);
    numero.value ="";
}
var numero = window.document.getElementById("numero");
botao.addEventListener("click", function(){
    caculaTabuada(numero.value);
})