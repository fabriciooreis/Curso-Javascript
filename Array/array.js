//Array ou vetor começa sempre com o índice 0, no javaScript um array pode ter tipos distintos de dados
let ArrayCarros = ["Toro", "Uno", "Pálio", new Date(), function(){}, 1];
console.log(ArrayCarros);
console.log(ArrayCarros[0]);
console.log(ArrayCarros.length);
//Para testar o código lembre-se de usar f12 no google chrome

//um foreach para passar por todo o arrayCarros
//vai receber uma função anonima que terá dois índices
//primeiro índice é o valor (o que está escrito lá dentro)
//segundo índice é o index do vetor
ArrayCarros.forEach(function(valor, indice){
    console.log(indice, valor);
});