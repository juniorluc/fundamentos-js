function apresentar(nome) {
    return `meu nome é ${nome}`;
}

//Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow funtcion com mais de uma linha
const somaNumerosPequenos = (num1, num2) => {
    if(num1 || num2 > 10){
        return `Somente números de 1 a 9`;
    }else{
        return num1 + num2;
    }
}

//Assim como as funções de expressões, a Arrow function não tem suporte para hoisting