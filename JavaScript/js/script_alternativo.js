// Função de saudação
function saudacao() {
  alert("Olá, mundo!");
}

// Seleciona o elemento de destino onde o conteúdo será inserido
const conteudoDiv = document.getElementById('conteudo');

// Variável para armazenar o HTML que será inserido
let htmlConteudo = '';

// Loop para gerar os números de 0 a 8
var i = 0;
for (i = 0; i <= 8; i++) {
  htmlConteudo += `Número digitado: ${i}<br />`;
}

// Obtém a data e hora atuais
const dataAtual = new Date();
const dia = dataAtual.getDate(); // Dia do mês (1-31)
const mes = dataAtual.getMonth(); // Mês (0-11, janeiro é 0)
const ano = dataAtual.getFullYear();
const hora = dataAtual.getHours(); // Hora (0-23)
const minutos = dataAtual.getMinutes(); // Minutos (0-59)
const segundos = dataAtual.getSeconds();

/*
  O uso de template literals (crases `) em vez de aspas duplas (") permite 
  que as variáveis sejam inseridas diretamente na string usando a sintaxe ${variável}.
*/
htmlConteudo += `<br />Data atual: ${dia}/${mes + 1}/${ano}<br />`;
htmlConteudo += `Horário atual: ${hora}:${minutos}:${segundos}`;

// Insere todo o conteúdo HTML de uma vez no elemento de destino
conteudoDiv.innerHTML = htmlConteudo;

/*
  ALTERNATIVA: Usando appendChild() para criar elementos do DOM

  Esta abordagem é mais "limpa" e segura, pois cria elementos DOM reais
  em vez de inserir strings HTML. É especialmente útil quando você precisa
  adicionar event listeners ou manipular os elementos posteriormente.
*/

// Exemplo comentado usando appendChild:
/*
// Limpa o conteúdo existente
conteudoDiv.innerHTML = '';

// Loop para criar elementos de parágrafo
for (let i = 0; i <= 8; i++) {
    const paragrafo = document.createElement('p');
    paragrafo.textContent = `Número digitado: ${i}`;
    conteudoDiv.appendChild(paragrafo);
}

// Cria um elemento para a data
const dataElemento = document.createElement('p');
dataElemento.innerHTML = `<br />Data atual: ${dia}/${mes + 1}/${ano}`;
conteudoDiv.appendChild(dataElemento);

// Cria um elemento para o horário
const horarioElemento = document.createElement('p');
horarioElemento.textContent = `Horário atual: ${hora}:${minutos}:${segundos}`;
conteudoDiv.appendChild(horarioElemento);
*/

