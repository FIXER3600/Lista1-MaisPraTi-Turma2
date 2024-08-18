let soma = 0;
let contador = 0;
let numero;

do {
    numero = parseFloat(prompt("Digite um número decimal (ou digite 0 para parar): "));
    if (numero != 0) {
        soma += numero;
        contador++;
    }
} while (numero != 0);

let media = soma / contador;

console.log("A média aritmética dos números digitados é: " + media.toFixed(2));
