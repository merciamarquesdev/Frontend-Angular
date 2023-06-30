//foreach

let vetor = [10,3,4,5];
//imprime os indices do vetor
for(let aux in vetor){
    console.log(aux);
}

console.log('---------------');

//imprime os elementos do vetor (foreach)
for(let aux of vetor){
    aux = 'teste'
    //vetor[aux] = 'teste'
    console.log(aux);
}
console.log(vetor);

console.log('---------------');

for(let i = 0; i<vetor.length;i++){
    vetor[i] = 'teste';
    console.log(vetor[i]);
}
console.log(vetor);

console.log('---------------');

vetor.forEach(aux => {
    console.log(aux);
});

console.log('---------------');