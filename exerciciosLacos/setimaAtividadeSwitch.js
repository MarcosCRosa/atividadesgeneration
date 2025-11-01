import readline from 'readline-sync';

let primeiroNumero;
let segundoNumero;
let operacao;
let resultado;
primeiroNumero = readline.questionInt("Digite o primeiro numero:");
segundoNumero = readline.questionInt("Digite o segundo numero:");
console.log("============Menu============")
console.log("Soma:\t\tID=1\nSubtracao:\tID=2\nMultiplicacao:\tID=3\nDivisao:\tID=4");
operacao = readline.questionInt("Digite a operacao:");
switch(operacao){
    case(1):
    resultado = primeiroNumero+segundoNumero;
    console.log(`${primeiroNumero}+${segundoNumero}=${resultado.toFixed(1)}`);
    break;
    case(2):
    resultado = primeiroNumero-segundoNumero;
    console.log(`${primeiroNumero}+${segundoNumero}=${resultado.toFixed(1)}`);
    break;
    case(3):
    resultado = primeiroNumero*segundoNumero;
    console.log(`${primeiroNumero}*${segundoNumero}=${resultado.toFixed(1)}`);
    break;
    case(4):
    resultado = primeiroNumero/segundoNumero;
    console.log(`${primeiroNumero}+${segundoNumero}=${resultado.toFixed(1)}`);
    break;    
} if(operacao>4 || operacao<=0){
    console.log("Operacao invalida!");
}