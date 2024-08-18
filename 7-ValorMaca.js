let numeroDeMacas = prompt("Digite o número de maçãs compradas: ");
let valorTotal;

if (numeroDeMacas < 12) {
    valorTotal = numeroDeMacas * 0.30;
} else {
    valorTotal = numeroDeMacas * 0.25;
}

console.log("O valor total da compra é R$ " + valorTotal.toFixed(2));
