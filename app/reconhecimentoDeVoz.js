const elementoChute = document.getElementById("chute");
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(event) {
    chute = event.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossueValorValido(chute);
};

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div> Você disse:</div>
        <span class = "box">${chute}</span>
    `
}

recognition.addEventListener("end", function () {
    recognition.start()
});