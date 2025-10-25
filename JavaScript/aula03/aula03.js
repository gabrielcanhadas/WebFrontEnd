// Função auxiliar para formatar a data (DD/MM/AAAA)
/*
Conversão para String:
----------------------
O método .padStart() só funciona em strings, então primeiro convertemos o 
número para string usando String(...).
Exemplo: dataAtual.getDate() retorna 5.

Aplicação do .padStart(2, '0'):
-------------------------------
Se a string tiver 2 ou mais caracteres (ex: "12"), ela permanece inalterada.
Se a string tiver 1 caractere (ex: "5"), o método adiciona um '0' no início 
para atingir o comprimento de 2, resultando em "05".
*/

// Função auxiliar para formatar a data (DD/MM/AAAA HH:MM:SS) com zero à esquerda
function getFormattedDate() {
    const dataAtual = new Date(); // Cria um novo objeto Date com a data e hora atuais
    // Obtém o dia do mês, converte para string e aplica o preenchimento com zero à esquerda
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    // Obtém o mês (0-indexado), soma 1 para obter o valor real (1-12), converte para string e aplica o preenchimento
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear(); // Obtém o ano completo (ex: 2024)
    // Obtém a hora (0-23), converte para string e aplica o preenchimento
    const hora = String(dataAtual.getHours()).padStart(2, '0');
    // Obtém os minutos (0-59), converte para string e aplica o preenchimento
    const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
    // Obtém os segundos (0-59), converte para string e aplica o preenchimento
    const segundos = String(dataAtual.getSeconds()).padStart(2, '0');
    // Retorna a string formatada no padrão [DD/MM/AAAA HH:MM:SS]
    return `[${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}]`;
}

// Seleciona todos os elementos <li> existentes no HTML (os itens de tarefa iniciais)
let myNodelist = document.getElementsByTagName("li");

// Bloco de inicialização: Processa os itens de tarefa que já estão no HTML ao carregar a página
for (let i = 0; i < myNodelist.length; i++) {
    // 2 - Inclui a data antes do texto descritivo (verifica se a data já foi incluída para evitar duplicação)
    if (!myNodelist[i].textContent.includes('[')) {
        const originalText = myNodelist[i].textContent; // Salva o texto original do item
        myNodelist[i].textContent = `${getFormattedDate()} ${originalText}`; // Adiciona a data formatada
    }

    // Cria o botão 'fechar' (x) para cada item
    let span = document.createElement("span"); // Cria um elemento <span>
    let txt = document.createTextNode("\u00D7"); // Cria um nó de texto com o caractere 'x' (multiplicação)
    span.className = "close"; // Aplica a classe CSS 'close' para estilização (posicionamento absoluto)
    span.appendChild(txt); // Adiciona o 'x' ao <span>
    myNodelist[i].appendChild(span); // Adiciona o <span> (botão 'fechar') ao final do <li>
}

// Seleciona todos os botões 'fechar' recém-criados (incluindo os dos itens iniciais)
let close = document.getElementsByClassName("close");

// Bloco de exclusão inicial: Adiciona a funcionalidade de exclusão aos botões iniciais
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement; // Obtém o elemento pai do botão (o <li>)
        div.style.display = "none"; // Define o estilo 'display: none;' para esconder o item da lista
    }
}

// Seleciona a lista não ordenada (ul) pelo seletor de tag
let list = document.querySelector('ul');

// Delegação de Eventos: Adiciona um ouvinte de clique à lista inteira (ul)
list.addEventListener('click', function (ev) {
    // Verifica se o elemento que foi clicado (ev.target) é um item de lista (LI)
    if (ev.target.tagName === 'LI') {
        // Alterna a classe 'checked' no <li> clicado. Isso ativa/desativa o estilo CSS de tarefa concluída (fundo cinza e texto riscado)
        ev.target.classList.toggle('checked');
    }
}, false); // O 'false' indica que o evento será capturado na fase de "bubbling" (padrão)

// Função para adicionar um novo item à lista, chamada ao clicar no botão "Incluir"
function addElemento() {
    let li = document.createElement("li"); // Cria um novo elemento <li>
    // Obtém o valor digitado no campo de input com id="tarefa"
    let inputValue = document.getElementById("tarefa").value;

    // 1 e 2 - Converte o texto para maiúsculo e concatena com a data formatada
    const taskText = `${getFormattedDate()} ${inputValue.toUpperCase()}`;
    let t = document.createTextNode(taskText); // Cria um nó de texto com o conteúdo da tarefa

    li.appendChild(t); // Adiciona o texto ao novo <li>

    // Validação simples: verifica se o campo de input está vazio
    if (inputValue === '') {
        alert("Você precisa descrever a tarefa"); // Exibe um alerta se o campo estiver vazio
    } else {
        // Adiciona o novo <li> à lista com id="itemLista"
        document.getElementById("itemLista").appendChild(li);
    }

    // Limpa o campo de input após a adição, preparando-o para a próxima tarefa
    document.getElementById("tarefa").value = "";

    // Cria e anexa o botão 'fechar' ao novo <li>
    let span = document.createElement("SPAN"); // Cria o elemento <span> para o botão
    let txt = document.createTextNode("\u00D7"); // Caractere 'x'

    span.className = "close"; // Aplica a classe CSS
    span.appendChild(txt);
    li.appendChild(span); // Anexa o botão 'fechar' ao novo item da lista

    // Bloco de exclusão para novos itens:
    // **Importante:** Este loop é executado para redefinir o manipulador de eventos 'onclick'
    // em TODOS os botões 'close' (os antigos e o novo).
    // Isso é necessário porque a variável 'close' (que contém a coleção de botões)
    // precisa ser atualizada para incluir o novo botão, e o evento precisa ser anexado a ele.
    // Uma melhoria seria usar a delegação de eventos para a exclusão também,
    // eliminando a necessidade deste loop repetitivo.
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// 3 - Função para limpar todos os itens da lista, não está sendo usada no HTML atual, mas está disponível.
function limparLista() {
    const ul = document.getElementById("itemLista"); // Seleciona a lista
    // Verifica se há elementos filhos (tarefas) na lista
    if (ul.children.length > 0) {
        // Pede confirmação ao usuário antes de limpar
        if (confirm("Tem certeza que deseja remover TODAS as tarefas da lista?")) {
            ul.innerHTML = ''; // Limpa todo o conteúdo HTML interno da <ul>, removendo todas as tarefas
        }
    } else {
        alert("A lista de tarefas já está vazia."); // Informa que a lista já está vazia
    }
}