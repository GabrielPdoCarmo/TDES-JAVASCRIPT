//Escreva uma função que receba dois números como parâmetros e retorne verdadeiro
 //se o primeiro for múltiplo do segundo e falso caso contrário.

 let a = 2
 let b = 8

function getMultiplos(a,b){
    if(a % b == 0 || b % a == 0){
        return true
    }else{
        return false
    }
}

console.log(getMultiplos(a,b));