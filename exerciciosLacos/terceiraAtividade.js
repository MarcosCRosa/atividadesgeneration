import readline from 'readline-sync';


//terceiro exercicio revisar posteriormente tive bastante dificuldade para realizar.
let idade;
let nomeDoador;
let jaFezDoacao = true;
let resposta;

idade = readline.questionInt("Digite a sua idade");
nomeDoador = readline.question("Digite seu nome");
resposta = readline.question("Ja fez doacao? sim ou nao");
jaFezDoacao = (resposta.toLowerCase()==="sim");

if(idade<18 || idade>69){
    console.log("Nao esta apto para doar");
}else if(idade>=60 && idade<=69 && jaFezDoacao){
       console.log(`${nomeDoador}: Esta apto(a) a doar`);
}else if(idade>=60 && idade <=69 && !jaFezDoacao){
        console.log(`${nomeDoador}: Não esta apto(a) para doar`);
}else{
    console.log(`${nomeDoador}:Esta apto(a) para doar`);
}
 


