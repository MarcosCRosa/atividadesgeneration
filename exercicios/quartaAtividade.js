import readline from 'readline-sync';
let numero1;
let numero2;
let numero3;
let numero4;

numero1 = readline.questionInt("Digite o numero 1:");
numero2 = readline.questionInt("Digite o numero 2:");
numero3 = readline.questionInt("Digite o numero 3:");
numero4 = readline.questionInt("Digite o numero 4:");

let diferenca = (numero1*numero2) - (numero3*numero4);
console.log(`A diferença entre os numeros é:${diferenca}`);


