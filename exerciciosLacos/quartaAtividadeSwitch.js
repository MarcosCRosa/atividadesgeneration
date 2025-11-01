import readline from 'readline-sync';
let saldo = 1000.00;
let saque;
let deposito;
let operacao;
operacao = readline.questionInt("Digite a operacao:");
switch (operacao) {
    case (1):
        console.log(saldo);
        break;
    case (2):
        saque = readline.questionInt("Digite o valor de saque");
        if (saldo -= saque) {
            console.log(saldo.toFixed(2));
        } if (saque > saldo) {
            console.log("operacao invalida")
        } break;
    case (3):
        deposito = readline.questionInt("Digite o valor de deposito");
        if (saldo += deposito) {
            console.log(saldo.toFixed);
        }
        break;
}if (operacao > 4) {
    console.log("operacao invalida");
}