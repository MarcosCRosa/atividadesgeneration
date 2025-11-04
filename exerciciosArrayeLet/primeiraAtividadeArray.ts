import readline from 'readline-sync';
const cores:Array<String> = new Array<String>();
let primeiraCor;
let segundaCor;


 while(cores.length<5){
 segundaCor=  readline.question("Digite outra cor");
 cores.push(segundaCor);  
 }console.log(cores.sort());

 // deus abençoe o while 