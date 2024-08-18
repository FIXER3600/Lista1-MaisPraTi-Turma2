let numero1 = 0;
let numero2 = 1;
let proximoNumero;

console.log(numero1); // Imprime o primeiro número da sequência
console.log(numero2); // Imprime o segundo número da sequência

for (let i = 3; i <= 10; i++) {
    proximoNumero = numero1 + numero2;
    console.log(proximoNumero); // Imprime o próximo número da sequência

    // Atualiza os números para a próxima iteração
    numero1 = numero2;
    numero2 = proximoNumero;
}
