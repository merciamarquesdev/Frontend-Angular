//prestar atençao na parte de and or not e ordem de leitura, estrutura do if...
//exercicios

// Calculo de valor do produto com e sem desconto
// Calcular o valor total da compra (vai ser um inteiro, um float, uma string?)
// se o valor total for maior do que 100, deveremos aplicar um desconto de 10%
// exibir a seguinte mensagem se tiver desconto: Valor total da compra: R$ 0, com 0% de desconto
// exibir a seguinte mensagem caso não tenha desconto: Valor total da compra: R$ 0
let valorProduto = 10.00;// valor do produto;
let quantidadeDesejada = 100;// quantidade do produto;
let total = parseFloat(valorProduto*quantidadeDesejada);
const valorMinimoParaDesconto = 100;
const fatorDesconto = 0.1;
const aplicaDesconto = total > valorMinimoParaDesconto;

if(aplicaDesconto)
    total -= (total*fatorDesconto);
let mensagem = `Valor total da compra: R$ ${total}`;
if(aplicaDesconto){
    console.log(mensagem+', com 10% de desconto.');
} else{
    console.log(mensagem);
}

console.log('---------------');

// Crie um programa para calcular a media de um aluno e de acordo com a media exibir se esta aprovado, reprovado ou em recuperação.
// Regras
// O aluno fez 3 atividades, ou seja, ele possui 3 notas.
// Dessas 3 notas, qual é a média do aluno?
// Se a média do aluno for maior ou igual a 7, exibir em uma mensagem que o aluno esta aprovado
// Se a média do aluno for maior ou igua a 5 e menor que 7, exibir uma mensagem que o aluno esta em recuperação
// Se a média do aluno for menor do que 5, exibir uma mensagem que o aluno foi reprovado

let nota1 = 7.0;
let nota2 = 5.0;
let nota3 = 9.5;
const media = (nota1+nota2+nota3)/3.0;
console.log(media.toFixed(2));
if(media >= 7.0){
    console.log('Aluno aprovado!');
} else if(media >= 5){
    console.log('Aluno em recuperação!');
} else{
    console.log('Aluno reprovado!');
}

console.log('---------------');

//codigo que imprima a tabuada do numero
for(let n = 1; n<=10; n++){
    let numero = n;
    for(let i = 1; i<=10; i++){
        let resultado = numero*i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
    console.log('---------------');
}

console.log('---------------');

//Escreva um programa que pede as notas de um aluno.

// O programa deverá exibir o prompt para o usuário inserir a nota e deverá adicionar esta nota CONVERTIDA PARA FLOAT em um array. Deve pedir 5 notas.

// Em seguida, calcule a média das notas e diga se o aluno foi aprovado ou reprovado.

// A média de aprovação é 7.
function calculaMedia(){
    let notas = [];
    let k = 0;
    while(k < 5){
        let input = prompt('Digite a nota ${k+1}: '); 
        let nota = parseFloat(input.replace(',','.'));
        notas.push(nota);
        k++;
    }
    console.log(notas);

    let soma = 0;
    for(const nota of notas){
        soma += nota;
    }
    let media = soma/notas.length;

    if(media >= 7.0){
        console.log('Aprovado!');
    }else{
        console.log('Reprovado');
    }
}
calculaMedia();

console.log('---------------');

//prova de 20h: perguntas de logica, codigo