//Parâmetros de função

// function soma(num1, num2){
//     return num1 + num2;
// }

// console.log(soma(2, 2));
// console.log(soma(500, 500));
// console.log(soma(-400, -200));


//Ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome}, e tenho ${idade}`;
}

//console.log(nomeIdade(21, "Junior"));


function soma(num1, num2){
    return num1 + num2;
}

function multiplica (num1 = 1, num2 = 1) {
    return num1 * num2 ;
}

console.log(multiplica(soma(4,5)));