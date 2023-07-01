//questao 1
let numero = 1;
let ehPrimo = true;
let ehNegativo = numero < 0;
let excecao = numero === 0 || numero === 1

if(excecao){
  console.log("O número não é primo!");
} else if(ehNegativo){
    console.log("Não é possível verificar se este número é primo.");
} else{
    for (let i = 2; i < numero; i++) {
      ehPrimo = (numero % i) !== 0;
      if (ehPrimo === false) {
        break;
      } 
    }
    if (!ehPrimo)
      console.log("O número não é primo!");
    else
      console.log("O número é primo!");
}



//>>>>>>> questao 2 - Resposta: A 
//resultado da expressao booleana: true (letra A)


//>>>>>> questao 3 - Resposta: C
// saída: 8 2 128 10 12 32 (letra C)


//>>>>>> questao 4 - Resposta: E
// saída: 1 1 2 1 2 3 1 2 3 4 (letra E)


// >>>>>> questao 5 - Resposta: E
// saída: 0 2 4 6 (letra E)


// >>>>>> questao 6 - Resposta: A
// resultado da expressao: true (letra A)