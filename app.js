let listaNumerosSecretos = [];
let numeroLimite = 10;

function alteraConteudo(tag, texto){
    let conteudo = document.querySelector(tag);
    conteudo.textContent = texto;
    //responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function textoInicial(){
    alteraConteudo("h1", "Bem vindo ao jogo do número secreto!");
    alteraConteudo("p", `Digite um número entre 1 e ${numeroLimite}. Boa sorte!`);
}

textoInicial();

function gerarNumeroAleatorio(){
    let numeroSecretoSorteado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSecretos.length;
    if(quantidadeElementosLista == numeroLimite){
        listaNumerosSecretos = [];
    }
    if(listaNumerosSecretos.includes(numeroSecretoSorteado)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSecretos.push(numeroSecretoSorteado);
        console.log(listaNumerosSecretos);
        return numeroSecretoSorteado;
    }
}

let numeroAleatorio = gerarNumeroAleatorio();

function limpaCampo(){
    chuteUsuario = document.querySelector("input");
    chuteUsuario.value = "";
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limpaCampo();
    tentativa = 1;
    textoInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

let tentativa = 1;
function verificarChute(){
    let chuteUsuario = document.querySelector("input").value;
    let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";

    if(chuteUsuario == numeroAleatorio){
        alteraConteudo("h1", "Parabéns! Você acertou o número secreto.")
        alteraConteudo("p", `O número secreto era ${numeroAleatorio} e você acertou em ${tentativa} ${palavraTentativa}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if( chuteUsuario > numeroAleatorio){
        alteraConteudo("h1", "Infelizmente você errou.");
        alteraConteudo("p", "O número secréto é menor.");
    } else {
        alteraConteudo("h1", "Infelizmente você errou.");
        alteraConteudo("p", "O número secreto é maior.");
    }
    tentativa++;
    limpaCampo();
}
