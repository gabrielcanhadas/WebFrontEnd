// Aula de JavaScript - Interruptor de Lâmpada
// Este arquivo demonstra conceitos fundamentais de JavaScript

// 1. SELECIONANDO ELEMENTOS DO DOM
// Usamos document.getElementById() para selecionar elementos pelo ID
const lampada = document.getElementById('lampada');
const btnLigar = document.getElementById('btnLigar');
const btnDesligar = document.getElementById('btnDesligar');

// 2. CRIANDO FUNÇÕES
// Funções são blocos de código reutilizáveis que executam tarefas específicas

/**
 * Função para ligar a lâmpada
 * Altera o atributo 'src' da imagem para mostrar a lâmpada acesa
 */
function ligarLampada() {
    lampada.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    console.log('Lâmpada ligada!'); // Mensagem no console do navegador
}

/**
 * Função para desligar a lâmpada
 * Altera o atributo 'src' da imagem para mostrar a lâmpada apagada
 */
function desligarLampada() {
    lampada.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
    console.log('Lâmpada desligada!'); // Mensagem no console do navegador
}

// 3. TRABALHANDO COM EVENTOS
// addEventListener() permite que o JavaScript "escute" eventos do usuário
// Sintaxe: elemento.addEventListener('tipoDeEvento', funcaoAExecutar)

// Quando o botão "Ligar" for clicado, executa a função ligarLampada
btnLigar.addEventListener('click', ligarLampada);

// Quando o botão "Desligar" for clicado, executa a função desligarLampada
btnDesligar.addEventListener('click', desligarLampada);

// 4. CONCEITOS DEMONSTRADOS NESTE CÓDIGO:
// - Seleção de elementos do DOM
// - Declaração de variáveis com const
// - Criação de funções
// - Manipulação de atributos de elementos (src)
// - Eventos e addEventListener
// - console.log() para depuração

// DESAFIO EXTRA: Tente adicionar um terceiro botão que alterna entre ligado/desligado!

