var btnJogar = window.document.getElementById("btnJogar");
var btnResetar = window.document.getElementById("btnReset");
var vitoriaJogador1 = 0;
var vitoriaComputador1 = 0;
var mensagem = document.getElementById("mensagem");
var placar = document.getElementById("placar");
function jogar(){
    var escolhaJogador = opcaoEscolhidaJogador();//1 Pedra, 2 Papel, 3 Tesoura
    //alert(escolhaJogador);
    var sorteioComp = sorteioComputador();
    //alert(sorteioComp);
    if(sorteioComp == 1){//caso sorteado Pedra
        if(escolhaJogador == 1){
            empate();
            imgJogo(sorteioComp);
        }else if(escolhaJogador == 2){
            vitoriaJogador();
            imgJogo(sorteioComp)
        }else if(escolhaJogador == 3){
            vitoriaComputador();
            imgJogo(sorteioComp);
        }else{
            alert("Erro");
        }
    }else if(sorteioComp == 2){//caso sorteado Papel
        if(escolhaJogador == 1){
            vitoriaComputador();
            imgJogo(sorteioComp);
        }else if(escolhaJogador == 2){
            empate();
            imgJogo(sorteioComp);
        }else if(escolhaJogador == 3){
            vitoriaJogador();
            imgJogo(sorteioComp);
        }else{
            alert("Erro");
        }
    }else if(sorteioComp == 3){//caso sorteado Tesoura
        if(escolhaJogador == 1){//Pedra
            vitoriaJogador();//Pedra contra Tesoura, Pedra ganha.
            imgJogo(sorteioComp);
        }else if(escolhaJogador == 2){
            vitoriaComputador();
            imgJogo(sorteioComp);
        }else if(escolhaJogador == 3){
            empate();
            imgJogo(sorteioComp);
        }else{
            alert("Erro");
        }
        
    }else{
        alert("erro ao porcessar jogo, tente outra vez por favor.");
    }
}
btnJogar.addEventListener("click", jogar);
btnResetar.addEventListener("click", resetar);

function resetar(){
    imgJogo(4);//esse valor é usado para chamar a imagem padrão para iniciar um novo jogo
    vitoriaComputador1 = 0;
    vitoriaJogador1 = 0;
    mensagem.innerHTML="Vamos começar?";
    placar.innerHTML="Placar";
}

function opcaoEscolhidaJogador(){
    var totalOpcoes = window.document.forms["formJokenpo"].radioJogo.length;
    var opcao = null;
    for(var x=0; x <= totalOpcoes; x++){
        if(document.forms["formJokenpo"].radioJogo[x].checked == true){
            opcao = document.forms["formJokenpo"].radioJogo[x].value;
            return opcao;
        }
    }
}

function sorteioComputador(){
    var sorteado = Math.floor(Math.random()* 3 + 1);
    return sorteado;
}

function empate(){
    if(vitoriaJogador1 == 10 && vitoriaComputador1 < 10){
        resetar();
        mensagem.innerHTML="Jogador é o Vencedor!"
    }else if(vitoriaComputador1 == 10 && vitoriaJogador1 < 10){
        resetar();
        mensagem.innerHTML ="Computador é o Vencedor."
    }else{
        vitoriaJogador1 += 1;
        vitoriaComputador1 += 1;
        mensagem.innerHTML ="Empatou.";
        placar.innerHTML = "Jogador " + vitoriaJogador1 +"<BR> Computador "+ vitoriaComputador1 +" ";
    }
}

function vitoriaJogador(){
    //alert("vitória Jogador");
    if(vitoriaJogador1 == 10 && vitoriaComputador1 < 10){
        resetar();
        mensagem.innerHTML ="Jogador é o Vencedor!";
    }else if(vitoriaComputador1 == 10 && vitoriaJogador1 <10){
        resetar();
        mensagem.innerHTML="Computador é o Vencedor.";
    }else{
        vitoriaJogador1 += 1;
        mensagem.innerHTML ="Você ganhou!";
        placar.innerHTML = "Jogador " + vitoriaJogador1 +"<BR> Computador "+ vitoriaComputador1 +" ";
    }
    
}

function vitoriaComputador(){
    //alert("Vitoria Computador");
    if(vitoriaComputador1 == 10 && vitoriaJogador1 < 10){
        resetar();
        mensagem.innerHTML ="Computador é o Vencedor.";
    }else if(vitoriaJogador1 == 10 && vitoriaComputador1 < 10){
        resetar();
        mensagem.innerHTML ="Jogador é o Vencedor!";
    }else{
        vitoriaComputador1 += 1;
        mensagem.innerHTML ="Você perdeu.";
        placar.innerHTML = "Jogador " + vitoriaJogador1 +"<BR> Computador "+ vitoriaComputador1 +"";
    }
}

function imgJogo(num){
    var imagem = document.getElementById("pc");
    if(num == 1){
        imagem.src="img/pcpedra.png";
    }else if(num == 2){
        imagem.src="img/pcpapel.png";
    }else if(num == 3){
        imagem.src="img/pctesoura.png";
    } else{
        imagem.src="img/pc.png";
    } 
}

