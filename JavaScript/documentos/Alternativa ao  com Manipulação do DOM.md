# Alternativa ao `document.write` com Manipulação do DOM

O `document.write()` é uma função antiga e, na maioria dos casos, desaconselhada para a manipulação do conteúdo de uma página web. Seu uso pode levar a problemas como a sobrescrita completa do documento se chamado após o carregamento inicial da página, ou a interrupção do carregamento do HTML.

A alternativa moderna e recomendada é a **Manipulação do DOM (Document Object Model)**. O DOM representa a estrutura da sua página HTML como uma árvore de objetos, e o JavaScript pode interagir com esses objetos para adicionar, remover ou modificar elementos e seus conteúdos de forma dinâmica e segura.

## O Código Original com `document.write`

```javascript
function saudacao() {
    alert("Olá, mundo!");
}

var i = 0;
for (i = 0; i <= 8; i++) {
    document.write("Número digitado: " + i);
    document.write("<br />");
}

const dataAtual = new Date();
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth();
const ano = dataAtual.getFullYear();
const hora = dataAtual.getHours();
const minutos = dataAtual.getMinutes();
const segundos = dataAtual.getSeconds();

document.write(`Data atual: ${dia}/${mes + 1}/${ano}`);
document.write("<br />");
document.write(`Horário atual: ${hora}:${minutos}:${segundos}`);
```

## A Alternativa com Manipulação do DOM

Para substituir o `document.write`, seguimos os seguintes passos:

1.  **Criar um elemento de destino no HTML:** Adicionamos um `div` (ou qualquer outro elemento) com um `id` específico no `index.html`. Este será o "contêiner" onde nosso conteúdo gerado pelo JavaScript será inserido.
2.  **Selecionar o elemento de destino no JavaScript:** Usamos `document.getElementById()` para obter uma referência a esse contêiner.
3.  **Construir o conteúdo dinamicamente:** Em vez de escrever diretamente na página, construímos uma string HTML (ou criamos elementos DOM programaticamente) que representa o conteúdo que queremos exibir.
4.  **Inserir o conteúdo no elemento de destino:** Atribuímos a string HTML construída à propriedade `innerHTML` do elemento de destino. Uma alternativa mais robusta para cenários complexos é criar elementos DOM usando `document.createElement()` e adicioná-los com `appendChild()`.

### `index.html` (com elemento de destino)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo sem document.write</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Exemplo: Manipulação do DOM sem document.write</h1>
        
        <!-- Elemento de destino onde o conteúdo será inserido -->
        <div id="conteudo"></div>
        
        <button onclick="saudacao()">Clique para Saudação</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### `style.css` (Estilização básica)

```css
/* Estilos gerais */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Container principal */
.container {
    background-color: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    max-width: 600px;
    width: 100%;
}

/* Título */
h1 {
    color: #333;
    margin-bottom: 30px;
    font-size: 24px;
    text-align: center;
}

/* Área de conteúdo dinâmico */
#conteudo {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #667eea;
    margin-bottom: 20px;
    min-height: 100px;
    line-height: 1.8;
}

/* Estilo do botão */
button {
    display: block;
    width: 100%;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #667eea;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
    background-color: #5568d3;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### `script.js` (com Manipulação do DOM)

```javascript
// Função de saudação (mantida como estava, pois não usa document.write)
function saudacao() {
    alert("Olá, mundo!");
}

// 1. Seleciona o elemento de destino onde o conteúdo será inserido
const conteudoDiv = document.getElementById("conteudo");

// 2. Variável para armazenar o HTML que será inserido
let htmlConteudo = "";

// 3. Loop para gerar os números de 0 a 8
// Em vez de document.write, adicionamos o HTML à nossa string
var i = 0;
for (i = 0; i <= 8; i++) {
    htmlConteudo += `Número digitado: ${i}<br />`;
}

// Obtém a data e hora atuais
const dataAtual = new Date();
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth();
const ano = dataAtual.getFullYear();
const hora = dataAtual.getHours();
const minutos = dataAtual.getMinutes();
const segundos = dataAtual.getSeconds();

// Adiciona a data e hora à nossa string HTML
htmlConteudo += `<br />Data atual: ${dia}/${mes + 1}/${ano}<br />`;
htmlConteudo += `Horário atual: ${hora}:${minutos}:${segundos}`;

// 4. Insere todo o conteúdo HTML de uma vez no elemento de destino
// Usamos innerHTML para renderizar a string HTML dentro da div #conteudo
conteudoDiv.innerHTML = htmlConteudo;

/*
  ALTERNATIVA MAIS ROBUSTA: Usando appendChild() para criar elementos do DOM
  
  Esta abordagem é mais "limpa" e segura, pois cria elementos DOM reais
  em vez de inserir strings HTML. É especialmente útil quando você precisa
  adicionar event listeners ou manipular os elementos posteriormente.
  
  Para usar esta alternativa, você pode descomentar o bloco abaixo e comentar
  as linhas que usam `htmlConteudo` e `innerHTML`.
*/

/*
// Limpa o conteúdo existente (se houver)
conteudoDiv.innerHTML = '';

// Loop para criar elementos de parágrafo para cada número
for (let i = 0; i <= 8; i++) {
    const paragrafo = document.createElement('p'); // Cria um novo elemento <p>
    paragrafo.textContent = `Número digitado: ${i}`; // Define o texto do parágrafo
    conteudoDiv.appendChild(paragrafo); // Adiciona o parágrafo ao elemento de destino
}

// Cria um elemento para a data
const dataElemento = document.createElement('p');
dataElemento.innerHTML = `Data atual: ${dia}/${mes + 1}/${ano}`;
conteudoDiv.appendChild(dataElemento);

// Cria um elemento para o horário
const horarioElemento = document.createElement('p');
horarioElemento.textContent = `Horário atual: ${hora}:${minutos}:${segundos}`;
conteudoDiv.appendChild(horarioElemento);
*/
```

## Como Testar

1.  Salve os três arquivos (`index.html`, `style.css`, `script.js`) na mesma pasta.
2.  Abra o arquivo `index.html` em seu navegador.

Você verá o conteúdo gerado pelo JavaScript dentro da área designada, sem o uso de `document.write`.

Esta abordagem é mais flexível, permite maior controle sobre o conteúdo e evita os problemas associados ao `document.write`.
