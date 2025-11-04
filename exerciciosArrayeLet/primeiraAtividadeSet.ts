 import readline, { questionInt } from 'readline-sync';

 const numeros:Set<number> = new Set<number>();
 let numeroDigitado;

// const todasEntradas: number[] = [];


// while (todasEntradas.length < 10) {
//     const numeroDigitado = readline.questionInt("Digite um numero: ");
//     todasEntradas.push(numeroDigitado);
//     numeros.add(numeroDigitado);
// }

// console.log("Numeros Digitados:", ...numeros);

// const ordenados = [...numeros].sort((a, b) => a - b);
// console.log("Numeros Em Ordem Crescente:", ...ordenados);

// const repetidos = [...numeros].filter(valor => 
//     todasEntradas.filter(n => n === valor).length > 1
// );

// if (repetidos.length > 0) {
//     console.log("Numeros Repetidos:", ...repetidos);
// } else {
//     console.log("Nenhum numero repetido.");
// }
for(let numero=0; numero<10; numero++){
numeroDigitado = questionInt("Digite um numero:");
numeros.add(numeroDigitado);


}
const numerosCrescentes:Array<number>= Array.from(numeros);
numerosCrescentes.sort();
console.log(`Ordem Crescente:${numerosCrescentes.sort((a,b)=>a-b)}`);
console.log("Numeros Digitados:",...numeros);
