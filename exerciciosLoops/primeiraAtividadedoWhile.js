import readline from 'readline-sync';
let numero1;
let resultado=0;
let continua=true;
do{
    numero1=readline.questionInt("Digite um numero");
   
   if(numero1!=0 && numero1>0){
    
    resultado+=numero1
    
   }
   if(numero1===0){
     continua=false;
   }
    
}while(continua);
console.log(`A soma dos numeros positivos é:${resultado}`);
