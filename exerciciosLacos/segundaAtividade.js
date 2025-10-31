import readline from 'readline-sync';

let numeroDigitado;

numeroDigitado = readline.questionInt("Digite um numero:");
if (numeroDigitado % 2 === 0 && numeroDigitado > 0) {
    console.log(`O numero digitado:${numeroDigitado},e par e positivo`);
} else if (numeroDigitado % 2 === 0 && numeroDigitado < 0) {
    console.log(`O numero digitado:${numeroDigitado}, e Par e negativo`);
} if (numeroDigitado % 2 != 0 && numeroDigitado > 0) {
    console.log(`O numero digitado:${numeroDigitado}, é impar e positivo`);
} else if (numeroDigitado % 2 != 0 && numeroDigitado < 0) {
    console.log(`O numero digitado:${numeroDigitado}, é impar e negativo`);
}