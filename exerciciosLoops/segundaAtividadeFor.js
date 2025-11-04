import readline from 'readline-sync';

let numero=0; 
let numerosPares=0;
let numerosImpares=0;
for(let index=1;index<=10;index++){
   numero = readline.questionInt("Digite um numero");
   if(numero%2===0){
    numerosPares++;
    
   }
   if(numero%2!==0){
    numerosImpares++;
    
   }if(index===10){
    console.log(`numeros pares:${numerosPares},numeros impares:${numerosImpares}`);

   }

   
}  
// poderia ter feito com apenas 1 if e else e o if do console nao precisa existir
// poderia simplesmente deixar fora do laço;
// fazer posteriormente;