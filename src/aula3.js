let result1 = Math.pow(2,2);
console.log(result1);

//lowering (descer o nivel)
let result2 = '0' === 0; //boolean, compara o conteudo E os tipos
//== (loose equality)
//=== (strict equality) USAR SMP ESSE
console.log(result2)

//and (&&) or (||) not (!)
let result3 = 1===1 && 2===2;
console.log(result3);

let result4 = 1===1 || 3===2 || 's'==='s';
console.log(result4);//da vdd logo no primeiro

let result5 = !(true);//negacao
console.log(result5);

let texto = 'amor';
let result6 = texto !== '';
let result7 = texto !== null;
console.log(result6,result7);

let bla = !!'bla';
console.log(bla);

////////////////////////////////////////////

flag = 'white'
if(flag === 'red'){
    console.log('red');
} else if(flag === 'blue'){
    console.log('blue');
} else if(flag === 'white'){//se é vdd, ele entra nesse else if e termina aqui, nao passa pelos outros elses
    console.log('white')
} else{
    console.log('black')
}

/////////////////////////////////////////////

// let input = parseInt(prompt('Digite sua idade: '));
// console.log(input);
// if(input === isNaN){
//     console.log(`A idade digitada não é um número.`);
// } else{
//     console.log(`A idade digitada, ${input} anos, é um número.`);
// }

//////////////////////////////////////////////

let tipoUsuario = 'Admin';
switch(tipoUsuario){
    case 'Admin':
        console.log('Vc é admin!');
        break;
    case 'Aluno':
    case 'Professor':
        console.log('Vc é um usuário!');
        break;
    default:
        console.log('Vc é ninguém!');
}

////////////////////////////////////////
class Aluno{

}
let a = new Aluno();
let tipo = a  instanceof(Aluno);
console.log(a)

let b = 10;
let tipo2 = typeof(b);
console.log(tipo2)

///////////////////////////////////////
//jeito tradicional
let nome1 = null;
if(!nome){//se a string ta vazia ou null
    nome = 'NA';
}
let nomeMaius = nome.toUpperCase();
console.log(nomeMaius);

//if ternario, faz tudo 
let nome2 = null;
let nomeMaius2 = nome2 ? nome2.toUpperCase() : 'NA';
console.log(nomeMaius2)
