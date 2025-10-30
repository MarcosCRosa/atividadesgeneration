import readline from 'readline-sync';


let salario;
let abono;
let novoSalario;

salario = readline.questionInt(" Digite o seu salario :",);
console.log(`O seu salario é: ${salario.toFixed(2)}`,);

abono = readline.questionInt(" Digite p seu abono:");
console.log(`o seu abono é: ${abono.toFixed(2)}`);

novoSalario = salario + abono;

console.log(`Seu salario com abono é: ${novoSalario.toFixed(2)}`);