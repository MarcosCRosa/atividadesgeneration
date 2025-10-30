import readline from 'readline-sync';

let nota1;
let nota2;
let nota3;
let nota4;
let media;

nota1 = readline.questionInt("Digite a sua primeira nota:");
nota2 = readline.questionInt("Digite a sua Segunda nota:");
nota3 = readline.questionInt("Digite a sua terceira nota:");
nota4 = readline.questionInt("Digite a sua quarta nota:");

media = (nota1+nota2+nota3+nota4)/4;

console.log(`A sua media é: ${media}`);


