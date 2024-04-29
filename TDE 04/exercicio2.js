
function soma(num1, num2) {
    return new Promise((resolve, reject) => {
        let resultado = num1 + num2;
        if (resultado % 2 === 0) {
            resolve(resultado);
        } else {
            reject(resultado);
        }
    });
}

soma(2, 3)
    .then(resultado => {
        console.log(`O número somado é par: ${resultado}`);
    })
    .catch(resultado => {
        console.log(`O número somado é ímpar: ${resultado}`);
    });
