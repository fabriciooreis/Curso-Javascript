var btnSortear = window.document.getElementById("btnSortear");
var naipes =["♥","♦","♣","♠"];
var cor = 0;
//Copas(alt + 3), ouro(alt + 4), Paus(alt + 5), Espadas(alt + 6)
var faces = ["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"];
function sorteadorDeFaces(){
    var sorteioFaces = Math.floor(Math.random()*14);
    var face = faces[sorteioFaces];
    //alert(face);
    return face;
}
function sorteadorNaipes(){
    var sorteioNaipes = Math.floor(Math.random()*4);
    var naipe = naipes[sorteioNaipes];
    if(sorteioNaipes == 0 || sorteioNaipes == 1){
        cor = 1;
        //alert(sorteioNaipes);
        //alert("0 ou 1");
    }else if(sorteioNaipes == 2 || sorteioNaipes == 3){
        cor = 2;
        //alert(sorteioNaipes);
        //alert("2 ou 3");
    }else{
        cor = 0;
        //alert("nenhum");
    }
    //alert(naipe);
    return naipe;
}

function cartas(){
    var face = sorteadorDeFaces();
    var naipe2 = sorteadorNaipes();
    var corFace = cor;

    var faceCarta = window.document.getElementById("faceCarta");
    var naipeCarta = window.document.getElementById("desenhoNaipe");
    var naipeMeio = window.document.getElementById("desenhoNaipeGrande");
    var faceCartaBottom = window.document.getElementById("faceCartaBottom");
    var naipeCartaBottom = window.document.getElementById("desenhoNaipeBottom");

    faceCarta.innerHTML = face;
    naipeCarta.innerHTML = naipe2;
    naipeMeio.innerHTML = naipe2;
    faceCartaBottom.innerHTML = face;
    naipeCartaBottom.innerHTML = naipe2; 

    if(corFace == 1){
        faceCarta.classList.add("vermelho");
        naipeCarta.classList.add("vermelho");
        naipeMeio.classList.add("vermelho");
        faceCartaBottom.classList.add("vermelho");
        naipeCartaBottom.classList.add("vermelho");   
    }else{
        faceCarta.classList.remove("vermelho");
        naipeCarta.classList.remove("vermelho");
        naipeMeio.classList.remove("vermelho");
        faceCartaBottom.classList.remove("vermelho");
        naipeCartaBottom.classList.remove("vermelho");  
    }
    //alert(face+naipe);
}

btnSortear.addEventListener("click", cartas);



