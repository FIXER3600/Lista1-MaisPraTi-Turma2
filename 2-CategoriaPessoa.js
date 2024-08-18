let idade = prompt("Digite a sua idade: ");

if (idade < 13) {
    console.log("Você é uma criança.");
} else if (idade < 18) {
    console.log("Você é um adolescente.");
} else if (idade < 60) {
    console.log("Você é um adulto.");
} else {
    console.log("Você é um idoso.");
}
