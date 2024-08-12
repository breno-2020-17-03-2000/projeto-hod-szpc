/*
    OBJETIVO - quando clicarmos no botÃ£o temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botÃµes
    - passo 2 - dar um jeito de identificar o clique do usuÃ¡rio no botÃ£o
    - passo 3 - desmarcar o botÃ£o selecionado anterior
    - passo 4 - marcar o botÃ£o clicado como se estivesse selecionado
    - passo 5 - esconder a imagem anteriormente selecionada
    - passo 6 - fazer aparecer a imagem correspondente ao botÃ£o clicado
    - passo 7 - esconder a informaÃ§Ã£o do dragÃ£o anteriormente selecionado
    - passo 8 - mostrar a informaÃ§Ã£o do dragÃ£o referente ao botÃ£o clicado
*/

//- passo 1 - dar um jeito de pegar o elemento HTML dos botÃµes
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

// - passo 2 - dar um jeito de identificar o clique do usuÃ¡rio no botÃ£o
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // - passo 3 - desmarcar o botÃ£o selecionado anterior
        desativarBotaoSelecionado();

        // 	- passo 4 - marcar o botÃ£o clicado como se estivesse selecionado
        marcarBotaoSelecionado(botao);

        // - passo 5 - esconder a imagem anteriormente selecionada
        esconderImagemAtiva();

        // - passo 6 - fazer aparecer a imagem correspondente ao botÃ£o clicado
        mostrarImagemDeFundo(indice);

        // - passo 7 - esconder a informaÃ§Ã£o do dragÃ£o anteriormente selecionado
        esconderInformacoesAtivas();

        // - passo 8 - mostrar a informaÃ§Ã£o do dragÃ£o referente ao botÃ£o clicado
        mostrarInformacoes(indice);
    });
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
