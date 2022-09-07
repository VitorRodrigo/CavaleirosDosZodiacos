const personagem = document.querySelectorAll('.personagens');
personagem.forEach((personagens) => {
    personagens.addEventListener('mouseenter', () => {
        const idSelecionado = personagens.attributes.id.value;

       

        var personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagens.classList.add('selecionado');
       var imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `../assets/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagens.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;


       

    });
});
