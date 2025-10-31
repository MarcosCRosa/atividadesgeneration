import readline from 'readline-sync';

let nome;
let codCargo;
let salario;
let cargo;
let novoSalario;
let percentualReajuste;
console.log("===============MENU===============");
nome = readline.question("Digite o seu nome");
console.log("Gerente:\tCOD:1\nVendedor:\tCOD:2\nSupervisor:\tCOD:3\nMotorista:\tCOD:4\nEstoquista:\tCOD:5\nTécnico de TI\tCOD:6")
codCargo = readline.questionInt("Digite o Codigo do seu cargo");
salario  = readline.questionInt("Digite o Seu Salario");
switch(codCargo){
    case(1):
    cargo = "Gerente";
    percentualReajuste = 10;
    novoSalario = salario+(percentualReajuste*salario);
    console.log(`Nome do colaborador:${nome}\nCargo:${cargo}\nSalario:${novoSalario}`);
    break;
    case(2): 
    cargo = "Vendedor";
    percentualReajuste = 7;
    novoSalario = salario+(percentualReajuste*salario);
    console.log(`Nome do colaborador:${nome}\nCargo:${cargo}\nSalario:${novoSalario}`);
    break;
    case(3):
    cargo = "Supervisor";
    percentualReajuste = 9;
    novoSalario = salario+(percentualReajuste*salario);
    console.log(`Nome do colaborador:${nome}\nCargo:${cargo}\nSalario:${novoSalario}`);
    break;
    case(4):
    cargo = "Motorista";
    percentualReajuste = 6;
    novoSalario = salario+(percentualReajuste*salario);
    console.log(`Nome do colaborador:${nome}\nCargo:${cargo}\nSalario:${novoSalario}`);
    break;
    case(5):
    cargo = "Estoquista";
    percentualReajuste = 5;
    novoSalario = salario+(percentualReajuste*salario);
    console.log(`Nome do colaborador:${nome}\nCargo:${cargo}\nSalario:${novoSalario}`);
    break;
    case(6):
    cargo = "Técnico de Ti";
    percentualReajuste = 8;
    novoSalario = salario+(percentualReajuste*salario);
    console.log(`Nome do colaborador:${nome}\nCargo:${cargo}\nSalario:${novoSalario}`);
}