//Number
let numero = 10; //int
let valor = 9.90; //float
console.log(numero); 
console.log(valor);

let a = parseInt('1');
let b = parseFloat('1.4');//com ponto, interpreta como float
let c = '1';
let d = parseFloat('2,5');//com virgula, pega so o q ta antes da virgula
let e = parseInt('1.5');//trunca o numero mostrando so a parte inteira
let f = Number('1');//Number() é o construtor da class Number
let g = Number('1,3');//dá nan (not a number)

console.log(a+b);//soma a e b como numeros
console.log(a+c);//concatena a como texto e c tb
console.log(d);
console.log(e);
console.log(f);
console.log(g);
