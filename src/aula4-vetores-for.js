let vetor = [
    [1,2],
    [3,4],
    [5,6]
];

//for
for(let i = 0; i < vetor.length; i++){
    const elemento = vetor[i];
    for(let j = 0; j < elemento.length; j++){
        console.log(elemento[j]);
    }
}

console.log('---------------');

let valores = [4,1,6,7,10,3,6,2];
for(let i = 0; i<valores.length; i++){
    let ePar = valores[i]%2 === 0;
    if(!ePar)
        continue;
    console.log(valores[i]);
}

console.log('---------------');

let val = [4,1,6,7,10,3,6,2];
for(let i = 0; i<val.length; i++){
    const element = val[i];
    let ePar = val[i]%2 === 0;
    for(let j = 0; j < element.length; j++)
    break;

    if(!ePar)
        break;
    
    console.log(val[i]);
}

console.log('---------------');

function teste(){
    let v = [2,1,4,3];
    for(i = 0; i<v.length; i++){
        let eImpar = v[i]%2 !== 0;

        if(eImpar)
            return;

        console.log(v[i]);
    }
    console.log('Final');
}
teste();