import readline from 'readline-sync';
// podia ter feito melhor mas com o que eu sei so deu ate aqui.
let codigoItem;
let quantidadeComprada;
let menu;
let produto=["Cachorro Quente","X-salada","X-Bacon","Bauru","Refrigerante","Suco de laranja"];
let precoUnitario=[10.00,15.00,18.00,12.00,8.00,13.00];
console.log("==============MENU=================")
console.log("Cachorro Quente\tcod=1\nX-salada\tcod=2\nX-Bacon\tcod=3\nBauru\tcod=4\nRefrigerante\tcode=5\nSuco de laranja\tcod=6");
codigoItem = readline.questionInt("Digite o codigo do item:");
quantidadeComprada = readline.questionInt("Digite a quantidade comprada");
let valorTotal

switch(codigoItem){
    case(1):
    valorTotal = precoUnitario[0]*quantidadeComprada;
    console.log(`Produto:${produto[0]}\nvalor Total:${valorTotal.toFixed(2)} `);
    break;
    case(2):
    valorTotal = precoUnitario[1]*quantidadeComprada;
    console.log(`Produto:${produto[1]}\nvalor Total:${valorTotal.toFixed(2)}`);
    break;
    case(3):
    valorTotal = precoUnitario[2]*quantidadeComprada;
    console.log(`Produto:${produto[2]}\nvalor Total:${valorTotal.toFixed(2)}`);
    break;
    case(4):
    valorTotal = precoUnitario[3]*quantidadeComprada;
    console.log(`Produto:${produto[3]}\nvalor Total:${valorTotal.toFixed(2)}`);
    break;
    case(5):
    valorTotal = precoUnitario[4]*quantidadeComprada;
    console.log(`Produto:${produto[4]}\nvalor Total:${valorTotal.toFixed(2)}`);
    break;
    case(6):
    valorTotal = precoUnitario[5]*quantidadeComprada;
    console.log(`Produto:${produto[5]}\nvalor Total:${valorTotal.toFixed(2)}`);
    break;
}