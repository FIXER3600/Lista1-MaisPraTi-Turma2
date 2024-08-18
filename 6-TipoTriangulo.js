let A = prompt("Digite o valor do lado A do triângulo: ");
let B = prompt("Digite o valor do lado B do triângulo: ");
let C = prompt("Digite o valor do lado C do triângulo: ");

if (A + B > C && B + C > A && C + A > B) {
    if (A == B && B == C) {
        console.log("O triângulo é equilátero.");
    } else if (A == B || B == C || C == A) {
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo.");
}
