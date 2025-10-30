import readline from 'readline-sync';

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;

salarioBruto = readline.questionInt("Digite o seu salario Bruto:");
adicionalNoturno = readline.questionInt("Digite o seu adicional noturno:");
horasExtras = readline.questionInt("Digite suas horas extras:");
descontos = readline.questionInt("Digite os seus descontos:");

let salarioLiquido = (salarioBruto+adicionalNoturno+(horasExtras*5))-descontos;
console.log(`Seu salario liquido é: ${salarioLiquido.toFixed(2)}`);