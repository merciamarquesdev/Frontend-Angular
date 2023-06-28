//Date
const data1 = new Date('2023-06-28 10:10');
const data2 = new Date();
console.log(data1,data2);

//Boolean
//let ehVerdade = true;
//truthy: qlqr coisa (1, true, 'false','bla','sim',10,5000)
//falsy: 0, nan, null, undefined, false
let ehV = Boolean('false'); //da true pq qlqr palavra ele trata como true
console.log(ehV);

//String vazia eh diferente de null
//Null eh diferente de undefined
//texto vazio existe, mas tem valor vazio
//null existe mas nao tem valor
//undefined nao existe, nao foi definido
let test1; //undefined
let test2 = null; //null
console.log(test1);
console.log(test2);


