var nome = null;
let email = "davi@gmail.com"

//let é acessivel apenas dentro do escopo e seus filhos, nao funciona fora do escopo (da null)
// usar sempre let
// pesquisar sobre garbage collector no javascript

//var é acessivel apenas no escopo que está e seus filhos (dentro das chaves), mas fora do escopo TAMBEM FUNCIONA, so nao é recomendavel

console.log(nome);

if(true){
    const idade = 25
    let nome = "Davi";
    var ligado = true;
    console.log(ligado);
    console.log(nome);
    console.log(idade);
}
//o nome é reservado fora do escopo
//nome = "Davi";
//da erro fora do escopo
console.log(ligado);
console.log(nome);
console.log(idade);

