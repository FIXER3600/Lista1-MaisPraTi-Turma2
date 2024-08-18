let soma = 0;

for (let i = 0; i < 5; i++) {
    let numero = prompt("Digite o número " + (i+1) + ": ");
    soma += Number(numero);
}

console.log("A soma total é: " + soma);