var data = Date.now();//um objeto do tipo Date => data
var tela = window;

function imprime(){
    let imprimeData = window.document.getElementById("dataDoDiaTimeStamp");
    imprimeData.innerHTML = `Data em milissegundos => timeStamp: ${data}`;
}
tela.addEventListener("load", imprime);

function dataQuaseFormatada(){
    var agora = new Date();
    let dataAtual = window.document.getElementById("dataFormatoObjeto");
    dataAtual.innerHTML = `Dia Atual: ${agora.getDate()} <br> Dia do mês: ${agora.getMonth()} <br>
    Ano Atual: ${agora.getFullYear()} ou <br>
    Data: ${agora.getDate()}/${agora.getMonth()+1}/${agora.getFullYear()}`;
    //document.write("Esse exemplo sempre vai trazer o mês com atraso, pois o mês começa em 0");
}
tela.addEventListener("load", dataQuaseFormatada);

function dataFormatada(){
    //padrao utilizado para mostrar a data de acordo com a localização do browser do usuário
    let dataPadrao = new Date();
    let dataPadraoAtual = window.document.getElementById("dataPadrao");
    dataPadraoAtual.innerHTML = `Data do local de acesso: ${dataPadrao.toLocaleDateString("pt-br")}`;
}
tela.addEventListener("load", dataFormatada);