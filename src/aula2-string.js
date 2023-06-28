//texto
let nome = "Davi";
let sobrenome = 'Santos';

//concatenaçao deixa o nome todo junto sem espaço
concat = nome+sobrenome;
console.log(concat);

//usando crase podemos fazer interpolação de string (junta dentro) - template string
let nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

//as duas formas estao corretas
let paragrafo1 = 'E entao ele disse: "blabla".';
let paragrafo2 = "Ela disse: 'olaaaa'";

//vazio é diferente de nulo e undefined
let vazio = '';

let email = 'Ola %NOME%';
//o replace gera uma nova string
email = email.replace('%NOME%',nome);
console.log(email)

