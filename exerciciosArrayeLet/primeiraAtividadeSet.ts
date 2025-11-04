import readline from 'readline-sync';

const numeros = new Set<number>();
const todasEntradas: number[] = [];


while (todasEntradas.length < 10) {
    const numeroDigitado = readline.questionInt("Digite um numero: ");
    todasEntradas.push(numeroDigitado);
    numeros.add(numeroDigitado);
}

console.log("Numeros Digitados:", ...numeros);

const ordenados = [...numeros].sort((a, b) => a - b);
console.log("Numeros Em Ordem Crescente:", ...ordenados);

const repetidos = [...numeros].filter(valor => 
    todasEntradas.filter(n => n === valor).length > 1
);

if (repetidos.length > 0) {
    console.log("Numeros Repetidos:", ...repetidos);
} else {
    console.log("Nenhum numero repetido.");
}