import readline from 'readline-sync';
let primeiroNumero;
let segundoNumero;

primeiroNumero = readline.questionInt("Digite o primeiro numero");
segundoNumero = readline.questionInt("Digite o segundo numero");
if(primeiroNumero>=segundoNumero){
    console.log("intervalo invalido");
 }
 for(let contador=primeiroNumero ; contador <= segundoNumero; contador++){

    if(contador%3===0 && contador%5===0){
        console.log(`${contador} é multiplo de 3 e 5`);
    
    }
 }
 // refazer esse exercicio 
 // tentar achar outra maneira de utilizar aquele if talvez verificar primeiro
 // e depois entrar num laço com else para ir para o loop.
 