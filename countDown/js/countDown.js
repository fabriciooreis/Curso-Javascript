var imagem = window.document.getElementById("fire");

var check = false;
function xequeMate(){
    if(check == false){
        var count = 10;
        var intervalo = setInterval(function(){inicio()}, 1000);
        var intervaloFinal = setTimeout(function(){end()}, 13200);
        function inicio(){
            soundBeep();
            document.getElementById("time").innerHTML = count;
            if(count == 0){
                //para parar o comando setInterval
                clearInterval(intervalo);
                soundThunder();
                document.getElementById("fire").src="img/explosion.gif";
                document.getElementById("time").innerHTML = "GAME OVER"
                
            }else{
                count --;
            }    
        }
        check = true;
    } 
}
function soundBeep(){
    var audioBeep = new Audio;
    audioBeep.src="sound/Beep_Short.mp3";
    audioBeep.play();
}
function soundThunder(){
    var audioBeep = new Audio;
    audioBeep.src="sound/Thunder_Crack.mp3";
    audioBeep.play();
}
function end(){
    document.getElementById("fire").src="img/clean.png";
}

imagem.addEventListener("click", xequeMate);
//explicação: deiferença entre setTimeout e setInterval
//ambas recebem os mesmos parametros -> setInterval(função, tempo em milissegundos){}
//a diferença entre elas é que a setTimeout chama a função passada apenas uma vez
//e a setInterval chama a função passada indefinidamente no intervalo de tempo passado
//para parar o comando setInterval -> clearInterval(nome da variável que recebe o método setInterval);