function mudarCor() {
    var elemento = document.getElementsByTagName("p")[0];
    if (elemento.style.color === 'red') {
        elemento.style.color = 'black';
        elemento.style.background = 'white';
    } else {
        elemento.style.color = 'red';
        elemento.style.background = 'green';
    }
}

const conteudos = {
    // Usando template literals (crase `) para quebrar a linha no código-fonte
    // e melhorar a legibilidade do texto longo.
    texto_onu_completo: `Em 2015, a ONU propôs aos seus países membros 
                         uma nova agenda de desenvolvimento sustentável
                         para os próximos 15 anos, a Agenda 2030, composta
                         pelos 17 Objetivos de Desenvolvimento Sustentável (ODS).`,

    texto_onu_alternativo: "Alterando o conteúdo.",

    onu: `Em 2015, a ONU propôs aos seus países membros uma nova agenda de desenvolvimento sustentável
          para os próximos 15 anos, a Agenda 2030, composta pelos 17 Objetivos de Desenvolvimento Sustentável (ODS).`,

    ods: `Os 17 Objetivos de Desenvolvimento Sustentável (ODS) são um apelo global à ação para acabar com a pobreza, proteger
          o ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade.`,

    texto_extra: "Este é um texto adicional que pode ser selecionado na lista de possibilidades.",

    // Você pode adicionar outros textos aqui
    texto_saudacao: "Bem-vindo ao nosso site!",
    texto_erro: "Ocorreu um erro ao carregar os dados."
};

function alternarTexto() {
    const elemento = document.getElementById('desc');

    if (!elemento) {
        console.error("Elemento com ID '" + elementoId + "' não encontrado.");
        return;
    }

    const textoA = conteudos.texto_onu_completo;
    const textoB = conteudos.texto_onu_alternativo;

    // Lógica de alternância
    if (elemento.innerHTML.trim() === textoA.trim()) {
        elemento.innerHTML = textoB;
    } else {
        elemento.innerHTML = textoA;
    }
}

function exibirConteudo(chaveDoTexto) {
    const elemento = document.getElementById('novotexto');

    if (!elemento) {
        console.error("Elemento com ID 'novotexto' não encontrado.");
        return;
    }

    // Verifica se a chave existe no objeto
    if (conteudos.hasOwnProperty(chaveDoTexto)) {
        // Usa a notação de colchetes [] para acessar a propriedade dinamicamente
        elemento.innerHTML = conteudos[chaveDoTexto];
    } else {
        elemento.innerHTML = "Erro: Conteúdo para '" + chaveDoTexto + "' não encontrado.";
        console.warn("Chave inválida: '" + chaveDoTexto + "'");
    }
}

//--------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {

    window.onload = () => exibirConteudo('texto_saudacao');

    const paragraphs = document.getElementsByTagName('p');
    const outputDiv = document.getElementById('conteudo');

    // Exemplo 1: Exibir os textos diretamente no HTML
    let allParagraphTexts = '<h2>Textos dos Parágrafos (Exemplo 1):</h2>';
    for (let i = 0; i < paragraphs.length; i++) {
        allParagraphTexts += `<p>${paragraphs[i].textContent}</p>`;
    }
    outputDiv.innerHTML = allParagraphTexts;

    /*
       // Exemplo 2: Armazenar os textos em um array e depois exibir
       const textsArray = [];
       for (let i = 0; i < paragraphs.length; i++) {
           textsArray.push(paragraphs[i].textContent);
       }
   
       let arrayOutput = '<h2>Textos dos Parágrafos (Exemplo 2 - Array):</h2>';
       textsArray.forEach(text => { arrayOutput += `<p>${text}</p>`; });
       outputDiv.innerHTML += arrayOutput;
   */
    //--------------------------------------------------------------------------------------------
    // 1. Cria um novo elemento <p>
    var novoParagrafo = document.createElement("p");

    // 2. Cria um nó de texto para o elemento <p>
    var textoNovo = document.createTextNode("Inserindo novo conteúdo sobre ODS!");

    // 3. Adiciona o nó de texto ao elemento <p>
    novoParagrafo.appendChild(textoNovo);

    // Adiciona a classe CSS para fazer o texto piscar
    //ver explicação após o código
    //============================
    novoParagrafo.classList.add("texto-piscando");

    // Opcional: Adicionar um estilo ou classe ao novo parágrafo
    novoParagrafo.style.color = "blue";
    novoParagrafo.style.fontWeight = "bold";

    // 4. Busca a seção onde o novo parágrafo será inserido, usando seu ID “inicio”
    var conteudo = document.getElementById("conteudo");

    // 5. Adiciona o novo parágrafo (com seu texto) à seção encontrada
    if (conteudo) { // Sempre é bom verificar se o elemento pai existe
        conteudo.appendChild(novoParagrafo);
    } else {
        console.error("Elemento com ID 'inicio' não encontrado.");
    }
    //--------------------------------------------------------------------------------------------
});

/*
 A linha de código 
 
 novoParagrafo.classList.add("texto-piscando"); 
 
 é fundamental para aplicar estilos e comportamentos definidos em CSS 
 a um elemento HTML criado ou manipulado via JavaScript. 
 É o elo entre o JavaScript (que cria e manipula o elemento) e o CSS
 (que define o estilo e o comportamento visual, como a animação de piscar). 
 Ela permite aplicar estilos dinamicamente a elementos HTML. 

novoParagrafo
-------------
O que é: 
novoParagrafo é uma variável JavaScript que armazena uma referência a um elemento HTML. 
Neste caso específico, é o elemento <p> que você criou usando document.createElement("p").

Propósito: 
Representa o objeto do DOM (Document Object Model) que corresponde ao parágrafo que você deseja manipular.

.classList
----------
O que é: 
classList é uma propriedade de somente leitura de um elemento HTML. Ela retorna um objeto DOMTokenList 
que representa a coleção de classes CSS do elemento.

Propósito: 
É uma interface conveniente para acessar e manipular as classes de um elemento. Antes do classList, 
era comum manipular a string element.className, o que era mais propenso a erros e menos eficiente
 para adicionar ou remover classes individualmente.

.add("texto-piscando")
----------------------
O que é: 
add() é um método do objeto DOMTokenList (retornado por classList). Ele permite adicionar uma ou mais 
classes CSS a um elemento. Você pode passar uma ou várias strings (separadas por vírgula) para este método.

Propósito: 
Ao chamar add("texto-piscando"), você está dizendo ao navegador para adicionar a classe CSS chamada 
texto-piscando ao elemento HTML representado por novoParagrafo.

Juntando tudo:
==============

Quando você escreve:
--------------------

novoParagrafo.classList.add("texto-piscando");

Você está instruindo o JavaScript a:
------------------------------------

1 - Pegar o elemento HTML que está na variável novoParagrafo.
2 - Acessar a lista de classes CSS desse elemento (.classList).
3 - Adicionar a classe "texto-piscando" a essa lista.


*/
