const prompt = require("prompt-sync")();
let numero=Number(input(prompt("Digite o número para verificar paridade:")));
if (numero % 2 == 0) {
	console.log(`Número ${numero} é par`);
}else{
	console.log(`Número ${numero} é impar`);
}

