function acesso() {
    let numero = document.getElementById('cartao').value;
    let mensagem = document.getElementById('acesso');

    if (numero >= 1000 && numero <= 1999) {
        mensagem.textContent = 'Acesso total permitido.';
        mensagem.style.color = 'green';
    } else if (numero >= 2000 && numero <= 2999) {
        mensagem.textContent = 'Acesso limitado permitido.';
        mensagem.style.color = 'orange';
    } else if (numero >= 3000) {
        mensagem.textContent = 'Acesso negado.';
        mensagem.style.color = 'red';
    } else {
        mensagem.textContent = 'Número de cartão inválido.';
        mensagem.style.color = 'red';
    }
}