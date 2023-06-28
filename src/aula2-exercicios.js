//exercicio 1
let string = "O céu é azul";
// Converter a string para letras maiúsculas
let stringMaiuscula = string.toUpperCase()// converter com uma função de string (string.funcao());
// Exibir a string convertida
console.log("String em maiúsculas: " + stringMaiuscula);

//exercicio 2
let string1 = "Mercia";
let string2 = "Marques";
// Concatenar as duas strings
let resultado = string1+string2// concatenar as duas strings;
// Exibir o resultado da concatenação
console.log("Strings concatenadas: " + resultado);
//exercicio 2

//exercicio 3
let valor1 = "1.4";
let valor2 = "2";
// Converter os valores para números
// Calcular a soma dos valores
let soma = parseFloat(valor1)+parseInt(valor2)// somar o valor1 com o valor2;
// Exibir o resultado da soma
console.log("Resultado da soma: " + soma); // a soma deve dar 3.4

//exercicio 4
// Interpolação de string
let nome = "Mercia";
let idade = 27;
// Interpolar a string usando template literals
let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
// Exibir a mensagem interpolada
console.log(mensagem);
