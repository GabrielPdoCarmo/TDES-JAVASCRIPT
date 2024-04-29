//Escreva um condicional que verifica se idade é menor que 18. 
//Se for verdadeiro, exiba "Menor de idade", caso contrário, exiba "Maior de idade".

let idade = 16;
if (idade < 18) {
    console.log("Menor de idade");
} else {
    console.log("Maior de idade");
}


;




































function mapearArray(funcao, array) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
        resultado.push(funcao(array[i]));
    }
    return resultado;
}

function multiplicarPorDois(numero) {
    return numero * 2;
}

var arrayOriginal = [1, 2, 3, 4, 5];
var arrayResultado = mapearArray(multiplicarPorDois, arrayOriginal);
console.log(arrayResultado); 