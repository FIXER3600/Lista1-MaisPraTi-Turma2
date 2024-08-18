let peso = prompt("Digite o seu peso em quilogramas: ");
let altura = prompt("Digite a sua altura em metros: ");

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Baixo peso");
} else if (imc < 24.9) {
    console.log("Peso normal");
} else if (imc < 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}
