var intervalo =3000;
//var corpo = window.document.querySelector("body");
function banner1(){
    window.document.getElementById("imagem").src="img/banner1.jpg";
    setTimeout(banner2, intervalo);
}
function banner2(){
    window.document.getElementById("imagem").src="img/banner2.jpg";
    setTimeout(banner3, intervalo);
}
function banner3(){
    window.document.getElementById("imagem").src="img/banner3.jpg";
    setTimeout(banner1, intervalo);
}
//corpo.addEventListener("load", banner1);