var qtdCapacidade = 30;
var qtdDisponivel = 30;

atualizarMsgDisponivel();

function atualizarMsgDisponivel() {
    let mensagem = `DISPONÍVEL: ${qtdDisponivel} / ${qtdCapacidade} xic.`;
    document.getElementById("msgDisponivel").innerText = mensagem; 
}

function consumirCafe(qtdConsumir) {
    qtdDisponivel -= qtdConsumir;
    atualizarMsgDisponivel();
}