function soma(num1, num2, callbackSucesso, callBackError) {
    let resultado = num1 + num2;
    if (resultado % 2 === 0) {
        callbackSucesso(resultado);
    } else {
        callBackError(resultado);
    }
}

function callbackSucesso(resultado) {
    console.log(`O número somado é par: ${resultado}`);
}


function callBackError(resultado) {
    console.log(`O número somado é ímpar: ${resultado}`);
}

soma(3, 3, callbackSucesso, callBackError);
