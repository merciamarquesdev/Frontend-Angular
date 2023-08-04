let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));

let peso1 = parseFloat(prompt("Digite o primeiro peso: "));
let peso2 = parseFloat(prompt("Digite o segundo peso: "));
let peso3 = parseFloat(prompt("Digite o terceiro peso: "));

let mediaSimples = (nota1+nota2+nota3)/3;
let somaPeso = (peso1+peso2+peso3);
let mediaPonderada = ((nota1*peso1)+(nota2*peso2) + (nota3*peso3)) / somaPeso;

console.log(mediaSimples);
console.log(mediaPonderada);