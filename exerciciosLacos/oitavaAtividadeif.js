import readline from 'readline-sync';

let primeiraCaracteristica 
let segundaCaracteristica 
let terceiraCaracteristica 
let vertebrado="vertebrado";
let ave = "ave";
let mamifero= "mamifero";
let carnivoro="carnivoro";
let onivoro = "onivoro";
let herbivoro = "herbivoro";
let inseto = "inseto";
let anelideo="anelideo";
let hematofago="hematofago"
let invertebrado="invertebrado";


primeiraCaracteristica = readline.question("Digite a primeira caracteristica");
if(primeiraCaracteristica===vertebrado){
segundaCaracteristica = readline.question("Digite a segunda caracteristica");
}if(segundaCaracteristica === ave){
terceiraCaracteristica = readline.question("Digite a terceira caracteristica");
 if(terceiraCaracteristica===carnivoro){
   console.log("Aguia");
}else if(terceiraCaracteristica===onivoro){
   console.log("Pomba");
}
}

else if(segundaCaracteristica === mamifero){
 terceiraCaracteristica = readline.question("Digite a terceira caracteristica");
 
 if(terceiraCaracteristica===onivoro){
   console.log("Homem");
 }else if(terceiraCaracteristica===herbivoro){
   console.log("Vaca")
 }
 
// vertebrados funcionando ate aqui;
}
if(primeiraCaracteristica===invertebrado){
 segundaCaracteristica = readline.question("Digite a segunda caracteristica");
}if(segundaCaracteristica===inseto){
 terceiraCaracteristica=readline.question("Digite a terceira caracteristica");
 if(terceiraCaracteristica===hematofago){
    console.log("Pulga");

 }else if(terceiraCaracteristica===herbivoro){
    console.log("Lagarta")
 }
}else if(segundaCaracteristica===anelideo){
        terceiraCaracteristica=readline.question("Digite a terceira caracteristica");
        if(terceiraCaracteristica===hematofago){
             console.log("sanguessuga");
        }else if(terceiraCaracteristica===onivoro){
             console.log("Minhoca");
        }
}
   // invertebrados tambem funcionando 
   // melhorar menu e formatação dos dados e das mensagens

