//Escreva uma função chamada validarDados que aceita uma função de validação e um objeto como parâmetros. 
//A função deve usar a função de validação para verificar se os dados no objeto 
//atendem à condição especificada e retornar true se sim, ou false caso contrário. (Ex. nome possui mais de 3 caracteres, senha existe, etc)

function validarDados(funcaoValidacao, objeto) {

    return funcaoValidacao(objeto);
}

const dados = {
    nome: "João",
    senha: "12",
    email: "email@email.com"
};

function validarNome(dados) {
    return dados.nome.length > 3;
}
function validarSenha(dados) {
    return dados.senha.length > 3;
}
function validarEmail(dados) {
    return dados.email.length > 3;
}
const nomeValido = validarDados(validarNome, dados);
const nomeValido2 = validarDados(validarEmail, dados);
const nomeValido3 = validarDados(validarSenha, dados);
console.log(nomeValido);
console.log(nomeValido2);;
console.log(nomeValido3);






