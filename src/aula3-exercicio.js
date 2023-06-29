//dadas as entradas a e b, inverter seus valores SEM usar uma variavel auxiliar
let a = 10;
let b = 5;

a = a+b;
b = a-b;
a = a-b;

console.log(a,b);

/////////////////////////////////////////////

// Solicitar ao usuário um número
let numero = parseInt(prompt('Digite um numero: '))// digite um número;

// utilize if para odentificar se o número é positivo, negativo ou zero
// Verificar se o número é positivo, negativo ou zero
// se o número for positivo, printar o texto "Esse número é positivo"
// se o número for negativo, printar o texto "Esse número é negativo"
// se o número for zero, printar o texto  "Esse número é zero"

if(numero > 0){
    console.log('É positivo.')
} else if(numero < 0){
    console.log('É negativo.')
} else{
    console.log('É zero.')
}