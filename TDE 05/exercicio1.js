// Função para somar dois números
function somar(a, b) {
    return a + b;
}

// Função para subtrair dois números
function subtrair(a, b) {
    return a - b;
}

// Função para dividir dois números
function dividir(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    }
    return a / b;
}

// Função para multiplicar dois números
function multiplicar(a, b) {
    return a * b;
}

// Exportando as funções para uso externo
module.exports = {
    somar,
    subtrair,
    dividir,
    multiplicar
};
