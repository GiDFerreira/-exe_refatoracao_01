/*
Exercício 2
*/

// Função para calcular a média de uma lista de valores
function calcularMedia(valores) {
    const soma = calcularSoma(valores);
    const media = soma / valores.length;
    return formatarNumero(media);
}

// Função para calcular o desvio padrão de uma lista de valores
function calcularDesvioPadrao(valores) {
    const media = calcularMedia(valores);
    const somaDiferencasQuadradas = calcularSomaDiferencasQuadradas(valores, media);
    const desvioPadrao = Math.sqrt(somaDiferencasQuadradas / valores.length);
    return formatarNumero(desvioPadrao);
}

// Função auxiliar para calcular a soma de uma lista de valores
function calcularSoma(valores) {
    return valores.reduce((acc, valor) => acc + valor, 0);
}

// Função auxiliar para calcular a soma das diferenças quadradas em relação à média
function calcularSomaDiferencasQuadradas(valores, media) {
    return valores.reduce((acc, valor) => acc + (valor - media) ** 2, 0);
}

// Função auxiliar para formatar um número com duas casas decimais
function formatarNumero(numero) {
    return numero.toFixed(2);
}

// Exemplo de uso das funções
let valores = [12, 15, 18, 20, 22];
console.log("Média: " + calcularMedia(valores));
console.log("Desvio Padrão: " + calcularDesvioPadrao(valores));
