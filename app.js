let listaNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){    
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número de 1 a 10");
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!!");
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}.`
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela("p",`O número secreto é menor que ${chute}.`);
        } else {
            exibirTextoNaTela("p",`O número secreto é maior que ${chute}.`);
        }
        tentativas++;
        limparCampo();
    }


}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaNumeroSorteados.length;

    if(quantidadeElementosNaLista == numeroLimite){
        listaNumeroSorteados = [];
    }
    if(listaNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}