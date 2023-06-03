function verificaSeOChutePossueValorValido(chute){
    const numero = +chute; // ao somar o js converte o numero para inteiro

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido</div>`;
        return
    }

    if (seONumeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido, o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if(numero === numeroScreto){
        document.body.innerHTML =`
            <h2>Você Acertou!!!</h2>
            <h3>O número Secreto era ${numeroScreto}</h3>
            <button id = "jogar-novamente" class="btn-jogar">Jogaя Novamente</button>
        `
    }

    else if (numero > numeroScreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-wide-short"></i></div>
        `
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-wide-short"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function seONumeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
};

document.body.addEventListener("click", e =>{
    if(e.target.id == "jogar-novamente"){
        window.location.reload();
    }
});