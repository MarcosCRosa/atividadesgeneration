import readline from 'readline-sync';
let menor21=0
let maior50=0
let continua=true;
while(continua){
const idade = readline.questionInt("Digite sua idade");
if(idade<21 && idade>0){
    menor21++;
}
if(idade>50){
   maior50++;
}
if(idade<0 ){
    console.log(`Total de pessoas menores que 21 anos:${menor21}\nTotal de pessoas maiores que 50 anos${maior50}`);
    continua=false;
}
}
// revisar foi bem dificil de fazer e errei bastante