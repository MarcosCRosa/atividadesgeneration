import readline from 'readline-sync';

let primeiroNumero, segundoNumero, terceiroNumero, soma;

primeiroNumero = readline.questionInt("Digite o primeiro numero:");
segundoNumero = readline.questionInt("Digite o segundo numero:");
terceiroNumero = readline.questionInt("Digite o terceiro numero:");
soma = primeiroNumero + segundoNumero;
if (soma > terceiroNumero) {
    console.log(`A soma do Primeiro numero=${primeiroNumero}. Com Segundo numero=${segundoNumero}. é maior que o terceiro numero=${terceiroNumero}`);
}
else if (soma < terceiroNumero) {
    console.log(`A soma do Primeiro numero=${primeiroNumero}. Com o segundo numero=${segundoNumero}. é menor que=${terceiroNumero}`);

}
else if (soma === terceiroNumero) {
    console.log(`A soma do Primeiro numero=${primeiroNumero}. Com o segundo numero=${segundoNumero}. é igual a= ${terceiroNumero}`);

}