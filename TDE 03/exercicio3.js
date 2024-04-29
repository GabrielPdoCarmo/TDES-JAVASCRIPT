// Escreva uma função chamada mapearArray que aceita uma função e um array como parâmetros. 
//A função mapearArray deve aplicar a função recebida a cada elemento do 
//array e retornar um novo array com os elementos resultantes.

function mapearArray(funcao, array){
    let novoArray = [];
    for(let i = 0; i < array.length; i++){
        novoArray.push(funcao(array[i]));
    }
    return novoArray; 
}

function dobro(numero){
    return numero * 2;
};

console.log(mapearArray(dobro, [1,2,3,4,6])); 