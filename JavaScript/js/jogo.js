// 1. Seleciona o elemento do jogador
const jogador = document.getElementById('jogador');

// 2. Define a "velocidade" do jogador (quantos pixels ele se move por vez)
const velocidade = 10;

// 3. Armazena a posição atual do jogador. Começamos pegando os valores do CSS.
// Usamos parseFloat para converter o valor "175px" em um número 175.
let posicaoX = parseFloat(getComputedStyle(jogador).left);
let posicaoY = parseFloat(getComputedStyle(jogador).top);

// 4. Adiciona o listener para o evento 'keydown'
document.addEventListener('keydown', (event) => {
    // Pega o nome da tecla pressionada
    const tecla = event.key;

    // 5. Usa um switch para determinar a ação baseada na tecla
    switch (tecla) {
        case 'ArrowUp': // Seta para Cima
            posicaoY -= velocidade;
            break;
        case 'ArrowDown': // Seta para Baixo
            posicaoY += velocidade;
            break;
        case 'ArrowLeft': // Seta para Esquerda
            posicaoX -= velocidade;
            break;
        case 'ArrowRight': // Seta para Direita
            posicaoX += velocidade;
            break;
        default:
            // Se não for uma tecla de seta, não faz nada
            return;
    }

    // Impede o comportamento padrão do navegador (como rolar a página com as setas)
    event.preventDefault();

    // 6. Atualiza a posição do jogador no CSS
    // Adicionamos 'px' ao final para criar um valor de CSS válido (ex: "185px")
    jogador.style.top = `${posicaoY}px`;
    jogador.style.left = `${posicaoX}px`;
});

/*
velocidade: Uma variável para controlar o quão rápido o quadrado se move. 
            Mude esse valor para torná-lo mais rápido ou mais lento.

posicaoX, posicaoY: Precisamos de variáveis para guardar a posição atual do jogador. 
                    Em vez de ler do CSS a cada movimento (o que pode ser lento), 
                    nós lemos uma vez no início e depois apenas atualizamos esses números na memória.

getComputedStyle(jogador): Esta função é importante. Ela nos dá os valores de CSS reais que o navegador 
                           está usando para o elemento, incluindo os que foram definidos no arquivo .css. 
                           jogador.style.left só leria estilos aplicados diretamente no elemento (inline), 
                           que estariam vazios no início.

switch (tecla): Verificamos o event.key. As teclas de seta têm nomes bem definidos: 
                ArrowUp, ArrowDown, ArrowLeft, e ArrowRight.

Lógica de Posição:
                   Para mover para cima, diminuímos o valor de top (posicaoY).
                   Para mover para baixo, aumentamos o valor de top.
                   Para mover para a esquerda, diminuímos o valor de left (posicaoX).
                   Para mover para a direita, aumentamos o valor de left.

jogador.style.top = \${posicaoY}px`;: Após calcular a nova posição, nós a aplicamos de volta ao estilo do elemento.
                                      A transition` que definimos no CSS cuida de animar o movimento suavemente.
*/