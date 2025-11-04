
import readline from 'readline-sync';

 const numeros:Set<number>= new Set<number>([1,2,3,4,5,6,7,8,9,10]);
 let numeroDigitado;
 numeroDigitado = readline.questionInt("Digite um numero");
 if(numeros.has(numeroDigitado)){
    console.log(`O Numero:${numeroDigitado}foi encontrado!`);
 }else{
    console.log(`O Numero:${numeroDigitado}Não foi encontrado!`);
 }

 // comparada a primeira essa aqui foi facil acho que sofri pra algo.