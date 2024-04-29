// Escreva uma função chamada filtrarArray que aceita uma função de filtro e um array como parâmetros. A função de filtro deve retornar true caso o elemento deva permanecer no array e false caso contrario. 
//A função filtrarArray deve aplicar essa função a todos os elementos e retornar um novo array apenas com os elementos restantes

function filtrarArray(funcao, array){
    let novoArray = []
    for(let i = 0; i < array.length; i++){
        if(funcao(array[i])){
            novoArray.push(array[i])
        }
    }
    return novoArray
}

function Pares(numero) {
    return numero % 2 === 0;
}

let numeros = [1, 2, 3, 4, 5, 6];

let NumeroFiltrados = filtrarArray(Pares, numeros);;

console.log(NumeroFiltrados); 