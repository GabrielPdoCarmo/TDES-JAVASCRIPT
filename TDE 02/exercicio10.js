//Crie uma função que receba um número como parâmetro e retorne o fatorial desse número.

let a = 7;

function NumeroFatorial(a) {
    if (a === 0 || a === 1) {
        return 1; 
    } else {
        return a * NumeroFatorial(a - 1); 
    }
}

console.log(NumeroFatorial(a)); 

;