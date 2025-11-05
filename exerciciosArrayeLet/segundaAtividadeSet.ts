import readline from 'readline-sync';
  const numeros:Set<number>= new Set<number>([2,5,1,3,4,9,7,8,10,6]);
   let numeroDigitado:number;
   let continua:boolean=true;
  while (continua){
  numeroDigitado = readline.questionInt("Digite um numero");
  if(numeros.has(numeroDigitado)){
     console.log(`O Numero:${numeroDigitado} foi encontrado!`);
  } else {
     console.log(`O Numero:${numeroDigitado} Não foi encontrado!`);
     continua = Boolean(readline.keyInYN("voce gostaria de digitar outro numero Y/n"));
  }
}